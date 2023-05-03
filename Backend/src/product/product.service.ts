import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { CreateProductDto, EditProductDto } from './product.dto';
import { editProductSerializer, productFormater, productSerializer } from './product.utils';
import { ProductQuery } from './product.types';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: number, query?: ProductQuery): Promise<any> {
    return (
      await this.prisma.product.findMany({
        where: { users: { some: { user: { id: userId } } }, ...query },
      })
    ).map((product) => productFormater(product));
  }

  async create(
    productDto: CreateProductDto,
    files: Express.Multer.File[],
    userId: number,
  ): Promise<any> {
    const productInDb = await this.prisma.product.findFirst({
      where: { name: productDto.name },
    });

    if (productInDb) {
      throw new HttpException('product_already_exist', HttpStatus.CONFLICT);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const product = await this.prisma.product.create({
      data: productSerializer(
        productDto,
        (files || []).map(
          (file: Express.Multer.File) => file.filename || file.originalname,
        ),
      ),
    });

    await this.prisma.usersOnProducts.create({
      data: {
        userId,
        productId: product.id,
        assignedBy: user.email,
      },
    });

    return product;
  }

  async edit(
    productDto: EditProductDto,
    files: Express.Multer.File[],
    userId: number,
  ): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    console.log('PUT product productDto: ', JSON.stringify(productDto), JSON.stringify({ id: user.id, mail: user.email }));

    const productInDb = await this.prisma.product.findFirst({
      where: { id: productDto.id },
    });

    if (!productInDb) {
      throw new HttpException('product_doesn_not_exist', HttpStatus.NOT_FOUND);
    }

    return await this.prisma.product.update({
      where: {
        id: productDto.id,
      },
      data: editProductSerializer(
        productDto,
        (files || []).map(
          (file: Express.Multer.File) => file.filename || file.originalname,
        ),
      ),
    });
  }
}

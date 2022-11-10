import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Collection } from '@prisma/client';

import { PrismaService } from '../prisma.service';

import { CreateCollectionDto } from './collection.dto';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  async create(collectionDto: CreateCollectionDto): Promise<Collection> {
    const collectionInDb = await this.prisma.collection.findFirst({
      where: { name: collectionDto.name },
    });

    if (collectionInDb) {
      throw new HttpException('collection_already_exist', HttpStatus.CONFLICT);
    }

    return this.prisma.collection.create({
      data: collectionDto,
    });
  }
}

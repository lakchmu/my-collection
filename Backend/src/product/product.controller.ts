import {
  Controller,
  UseGuards,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  Get,
  Request,
  Query,
  Put,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { ProductService } from './product.service';
import { CreateProductDto, PayloadProductDto } from './product.dto';
import { ProductQuery } from './product.types';
import { payloadSerializer } from './product.utils';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @Get('/')
  async getAll(@Request() req, @Query() query: ProductQuery): Promise<any> {
    console.log('GET all products');
    return this.productService.getAll(req.user.id, query);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(
    FilesInterceptor('files', 99, {
      dest: './uploads',
    }),
  )
  @Post('/')
  async create(
    @Request() req,
    @Body() createCollectionDto: CreateProductDto,
    @UploadedFiles()
    files: Array<Express.Multer.File>,
  ): Promise<any> {
    return this.productService.create(createCollectionDto, files, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(
    FilesInterceptor('files', 99, {
      dest: './uploads',
    }),
  )
  @Put('/')
  async edit(
    @Request() req,
    @Body() payloadDto: PayloadProductDto,
    @UploadedFiles()
    files: Array<Express.Multer.File>,
  ): Promise<any> {
    console.log('PUT product payloadDto: ', JSON.stringify(payloadDto));
    return this.productService.edit(payloadSerializer(payloadDto), files, req.user.id);
  }
}

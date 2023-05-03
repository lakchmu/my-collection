import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { PrismaService } from '../prisma.service';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  exports: [],
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}

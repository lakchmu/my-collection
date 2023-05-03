import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { PrismaService } from '../prisma.service';

import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  exports: [],
  controllers: [CollectionController],
  providers: [CollectionService, PrismaService],
})
export class CollectionModule {}

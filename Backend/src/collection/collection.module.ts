import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
  imports: [],
  exports: [],
  controllers: [CollectionController],
  providers: [CollectionService, PrismaService],
})
export class CollectionModule {}

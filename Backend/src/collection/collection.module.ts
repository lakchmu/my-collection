import { Module } from '@nestjs/common';

import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
  imports: [],
  exports: [],
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}

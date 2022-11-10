import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Collection } from '@prisma/client';

import { CreateCollectionDto } from './collection.dto';

@Injectable()
export class CollectionService {
  async create(collectionDto: CreateCollectionDto): Promise<Collection> {
    const collectionInDb = await prisma.collection.findFirst({
      where: { name: collectionDto.name },
    });

    if (collectionInDb) {
      throw new HttpException('collection_already_exist', HttpStatus.CONFLICT);
    }

    return prisma.collection.create({
      data: collectionDto,
    });
  }
}

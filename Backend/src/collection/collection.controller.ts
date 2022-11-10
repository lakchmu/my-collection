import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Collection } from '@prisma/client';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { CreateCollectionDto } from './collection.dto';
import { CollectionService } from './collection.service';

@ApiTags('collection')
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @Post('/')
  async create(@Body() createCollectionDto: CreateCollectionDto): Promise<Collection> {
    return this.collectionService.create(createCollectionDto);
  }
}

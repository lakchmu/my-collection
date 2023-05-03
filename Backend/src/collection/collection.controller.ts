import {
  Controller,
  UseGuards,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { CreateCollectionDto } from './collection.dto';
import { CollectionService } from './collection.service';

@ApiTags('collection')
@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(
    FilesInterceptor('files'),
  )
  @Post('/')
  async create(
    @Body() createCollectionDto: CreateCollectionDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<any> {
    return this.collectionService.create(createCollectionDto, files);
  }
}

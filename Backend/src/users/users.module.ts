import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}

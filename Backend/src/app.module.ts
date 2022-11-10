import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CollectionController } from './collection/collection.controller';
import { CollectionService } from './collection/collection.service';
import { CollectionModule } from './collection/collection.module';

@Module({
  imports: [AuthModule, UsersModule, CollectionModule],
  controllers: [AppController, CollectionController],
  providers: [AppService, CollectionService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Favorite } from './models/favorite.model';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';

@Module({
  imports: [SequelizeModule.forFeature([Favorite])],
  controllers: [FavoriteController],
  providers: [FavoriteService],
})
export class FavoriteModule {}

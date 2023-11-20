import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Favorite } from './models/favorite.model';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite)
    private readonly favoriteModel: typeof Favorite,
  ) {}

  create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    return this.favoriteModel.create({
      ...createFavoriteDto,
    });
  }

  async findAll(userId: number): Promise<Favorite[]> {
    return this.favoriteModel.findAll({
      where: {
        userId,
      },
      include: { all: true },
    });
  }

  findOne(id: number): Promise<Favorite> {
    return this.favoriteModel.findOne({
      where: {
        id,
      },
      include: { all: true },
    });
  }
  findByUserId(userId: number): Promise<Favorite> {
    return this.favoriteModel.findOne({
      where: {
        userId,
      },
      include: { all: true },
    });
  }
  async remove(id: number): Promise<void> {
    const Favorite = await this.findOne(id);
    await Favorite.destroy();
  }
}

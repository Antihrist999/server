import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rating } from './models/price.model';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating)
    private readonly RatingModel: typeof Rating,
  ) {}

  create(createRatingDto: CreateRatingDto): Promise<Rating> {
    return this.RatingModel.create({
      ...createRatingDto,
    });
  }
  update(createRatingDto: CreateRatingDto): Promise<Rating> {
    this.RatingModel.update(
      { ...createRatingDto },
      { where: { id: createRatingDto.id } },
    );
    return this.RatingModel.findOne({
      where: {
        id: createRatingDto.id,
      },
    });
  }

  async findAll(): Promise<Rating[]> {
    return this.RatingModel.findAll({
      include: { all: true },
    });
  }

  findOne(productId: number): Promise<Rating> {
    return this.RatingModel.findOne({
      where: {
        productId,
      },
      include: { all: true },
    });
  }
  findByProductId(productId: number): Promise<Rating[]> {
    return this.RatingModel.findAll({
      where: {
        productId,
      },
      include: { all: true },
    });
  }
  async remove(id: number): Promise<void> {
    const Rating = await this.findOne(id);
    await Rating.destroy();
  }
}

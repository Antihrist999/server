import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Picture } from './models/picture.model';
import { CreatePictureDto } from './dto/create-picture.dto';

@Injectable()
export class PictureService {
  constructor(
    @InjectModel(Picture)
    private readonly PictureModel: typeof Picture,
  ) {}

  create(createPictureDto: CreatePictureDto): Promise<Picture> {
    return this.PictureModel.create({
      ...createPictureDto,
    });
  }
  update(createPictureDto: CreatePictureDto): Promise<Picture> {
    this.PictureModel.update(
      { ...createPictureDto },
      { where: { id: createPictureDto.id } },
    );
    return this.PictureModel.findOne({
      where: {
        id: createPictureDto.id,
      },
    });
  }

  async findAll(): Promise<Picture[]> {
    return this.PictureModel.findAll();
  }
  findOne(productId: number): Promise<Picture> {
    return this.PictureModel.findOne({
      where: {
        productId,
      },
      include: { all: true },
    });
  }
  findByProductId(productId: number): Promise<Picture> {
    return this.PictureModel.findOne({
      where: {
        productId,
      },
    });
  }
  async remove(id: number): Promise<void> {
    const Picture = await this.findOne(id);
    await Picture.destroy();
  }
}

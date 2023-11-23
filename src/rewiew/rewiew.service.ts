import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rewiew } from './models/rewiew.model';
import { CreateRewiewDto } from './dto/create-rewiew.dto';

@Injectable()
export class RewiewService {
  constructor(
    @InjectModel(Rewiew)
    private readonly RewiewModel: typeof Rewiew,
  ) {}

  create(createRewiewDto: CreateRewiewDto): Promise<Rewiew> {
    return this.RewiewModel.create({
      ...createRewiewDto,
    });
  }
  update(createRewiewDto: CreateRewiewDto): Promise<Rewiew> {
    this.RewiewModel.update(
      { ...createRewiewDto },
      { where: { id: createRewiewDto.id } },
    );
    return this.RewiewModel.findOne({
      where: {
        id: createRewiewDto.id,
      },
    });
  }

  async findAll(): Promise<Rewiew[]> {
    return this.RewiewModel.findAll({
      include: { all: true },
    });
  }

  findOne(productId: number): Promise<Rewiew> {
    return this.RewiewModel.findOne({
      where: {
        productId,
      },
      include: { all: true },
    });
  }
  findByProductId(productId: number): Promise<Rewiew[]> {
    return this.RewiewModel.findAll({
      where: {
        productId,
      },
      include: {
        all: true,
        include: [
          {
            all: true,
          },
        ],
      },
    });
  }
  async remove(id: number): Promise<void> {
    const Rewiew = await this.findOne(id);
    await Rewiew.destroy();
  }
}

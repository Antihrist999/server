import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Price } from './models/Price.model';
import { CreatePriceDto } from './dto/create-Price.dto';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(Price)
    private readonly PriceModel: typeof Price,
  ) {}

  create(createPriceDto: CreatePriceDto): Promise<Price> {
    return this.PriceModel.create({
      ...createPriceDto,
    });
  }

  async findAll(): Promise<Price[]> {
    return this.PriceModel.findAll({
      include: { all: true },
    });
  }

  findOne(productId: number): Promise<Price> {
    return this.PriceModel.findOne({
      where: {
        productId,
      },
      include: { all: true },
    });
  }
  async remove(id: number): Promise<void> {
    const Price = await this.findOne(id);
    await Price.destroy();
  }
}

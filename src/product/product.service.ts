import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/Product.model';
import { CreateProductDto } from './dto/create-Product.dto';
import { Op } from 'sequelize';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly ProductModel: typeof Product,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    return this.ProductModel.create({
      ...createProductDto,
    });
  }

  async findAll(): Promise<Product[]> {
    console.log(13);
    return this.ProductModel.findAll({
      include: { all: true },
    });
  }

  findOne(id: number): Promise<Product> {
    return this.ProductModel.findOne({
      where: {
        id,
      },
      include: { all: true },
    });
  }
  findProductByName(name: string): Promise<Product[]> {
    console.log(12);
    return this.ProductModel.findAll({
      where: {
        name: {
          [Op.like]: '%' + name + '%',
        },
      },
      include: { all: true },
    });
  }
  async remove(id: number): Promise<void> {
    const Product = await this.findOne(id);
    await Product.destroy();
  }
}

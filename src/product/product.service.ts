import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.create({ ...createProductDto });
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return this.productModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

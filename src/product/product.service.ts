import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/Product.model';
import { CreateProductDto, ProductFiltered } from './dto/create-Product.dto';
import { Op, WhereOptions } from 'sequelize';
import sequelize from 'sequelize';
interface arrayProduct {
  id: number;
}
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
    return this.ProductModel.findAll({
      include: { all: true },
    });
  }

  async findFiltered(
    category,
    minPrice,
    maxPrice,
  ): Promise<WhereOptions<arrayProduct>> {
    return this.ProductModel.sequelize.query(
      `SELECT product.id FROM public."Products" as product, public."Prices" as price where
        product.id = price."productId"` +
        category +
        ` and price.price>=` +
        minPrice +
        ` and price.price<=` +
        maxPrice +
        ` ORDER BY product.id DESC`,
      { type: sequelize.QueryTypes.SELECT },
    );
  }
  async filtered(productFiltered: ProductFiltered): Promise<Product[]> {
    const category =
      productFiltered.category !== undefined
        ? ` and product.category in (` +
          productFiltered.category.join(',') +
          `)`
        : '';

    const fetch = await this.findFiltered(
      category,
      productFiltered.minPrice,
      productFiltered.maxPrice,
    ).then((result) => result);
    return this.ProductModel.findAll({
      where: {
        [Op.or]: fetch,
      },
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

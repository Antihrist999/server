import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './models/product.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PriceModule } from 'src/price/price.module';

@Module({
  imports: [SequelizeModule.forFeature([Product]), PriceModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

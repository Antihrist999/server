import { ApiProperty } from '@nestjs/swagger';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/models/Product.model';

@Table
export class Price extends Model {
  @Column
  @ForeignKey(() => Product)
  @ApiProperty({ description: 'Идентификатор продукта' })
  productId: number;
  @Column
  @ApiProperty({ description: 'Цена' })
  price: number;
  @Column
  @ApiProperty({ description: 'Процент скидки' })
  discount: number;
}

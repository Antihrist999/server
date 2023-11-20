import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/models/product.model';

@Table
export class Cart extends Model {
  @ApiProperty({ description: 'Идентификатор' })
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;
  @ApiProperty({ description: 'Колличество' })
  @Column
  counter: number;
  @ApiProperty({ description: 'Продукт в корзине' })
  @Column
  isCarts: boolean;
  @ApiProperty({ description: 'Выделение продукта в корзине' })
  @Column
  isSelected: boolean;
  @ApiProperty({ description: 'Ид продукта' })
  productId: number;
  @BelongsTo(() => Product, 'productId')
  product: Product;

  @ApiProperty({ description: 'Ид пользователя' })
  @Column
  userId: number;
}

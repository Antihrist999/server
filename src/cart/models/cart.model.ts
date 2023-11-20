import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/product/models/product.model';

@Table
export class Cart extends Model {
  @ApiProperty({ description: 'Колличество' })
  @Column
  counter: number;
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

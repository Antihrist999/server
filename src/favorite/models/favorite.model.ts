import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Product } from 'src/product/models/Product.model';
import { User } from 'src/user/models/user.model';

@Table
export class Favorite extends Model {
  @ApiProperty({ description: 'Идентификатор продукта' })
  @Column
  productId: number;
  @BelongsTo(() => Product, 'productId')
  product: Product;
  @Column
  @ForeignKey(() => User)
  @ApiProperty({ description: 'Идентификатор пользователя' })
  userId: number;
  @Column({ defaultValue: true })
  @ApiProperty({ description: 'Избранное' })
  isFavorite: boolean;
}

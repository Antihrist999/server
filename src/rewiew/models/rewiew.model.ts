import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/models/Product.model';

import { User } from 'src/user/models/user.model';

@Table
export class Rewiew extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  @ApiProperty({ description: 'Идентификатор' })
  id: number;
  @ApiProperty({ description: 'Информация о пользователе' })
  @BelongsTo(() => User, 'userId')
  user: User;
  @ApiProperty({ description: 'Информация о рейтинге' })
  @BelongsTo(() => Product, 'productId')
  product: Product;
  @Column
  @ApiProperty({ description: 'Идентификатор продукта' })
  productId: number;
  @Column
  @ApiProperty({ description: 'Идентификатор пользователя' })
  userId: number;
  @Column
  @ApiProperty({ description: 'Отзыв' })
  message: string;
}

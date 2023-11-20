import { ApiProperty } from '@nestjs/swagger';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/models/Product.model';
import { User } from 'src/user/models/user.model';

@Table
export class Rating extends Model {
  @Column
  @ForeignKey(() => Product)
  @ApiProperty({ description: 'Идентификатор продукта' })
  productId: number;
  @Column
  @ForeignKey(() => User)
  @ApiProperty({ description: 'Идентификатор пользователя' })
  userId: number;
  @Column
  @ApiProperty({ description: 'Цена' })
  rating: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Price extends Model {
  @Column
  @ApiProperty({ description: 'Идентификатор продукта' })
  productId: number;
  @Column
  @ApiProperty({ description: 'Цена' })
  price: number;
  @Column
  @ApiProperty({ description: 'Цена со скидкой' })
  discountPrice: number;
  @Column
  @ApiProperty({ description: 'Процент скидки' })
  discount: number;
}

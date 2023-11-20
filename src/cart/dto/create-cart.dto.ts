import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty({ description: 'Идентификатор' })
  id: number;
  @ApiProperty({ description: 'Колличество' })
  counter: number;
  @ApiProperty({ description: 'Выделение продукта в корзине' })
  isSelected: boolean;
  @ApiProperty({ description: 'Продукт в корзине' })
  isCarts: boolean;
  @ApiProperty({ description: 'Ид продукта' })
  productId: number;
  @ApiProperty({ description: 'Ид пользователя' })
  userId: number;
}

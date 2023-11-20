import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty({ description: 'Колличество' })
  counter: number;
  @ApiProperty({ description: 'Выделение продукта в корзине' })
  isSelected: boolean;
  @ApiProperty({ description: 'Ид продукта' })
  productId: number;
  @ApiProperty({ description: 'Ид пользователя' })
  userId: number;
}

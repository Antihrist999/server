import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingDto {
  @ApiProperty({ description: 'Идентификатор продукта' })
  productId: number;

  @ApiProperty({ description: 'Идентификатор пользователя' })
  userId: number;

  @ApiProperty({ description: 'Рейтинг' })
  rating: number;
}

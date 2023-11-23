import { ApiProperty } from '@nestjs/swagger';

export class CreateRewiewDto {
  @ApiProperty({ description: 'Идентификатор' })
  id: number;
  @ApiProperty({ description: 'Идентификатор продукта' })
  productId: number;

  @ApiProperty({ description: 'Идентификатор пользователя' })
  userId: number;

  @ApiProperty({ description: 'Отзыв' })
  message: number;
}

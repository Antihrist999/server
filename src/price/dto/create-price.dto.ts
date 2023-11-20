import { ApiProperty } from '@nestjs/swagger';

export class CreatePriceDto {
  @ApiProperty({ description: 'Идентификатор продукта' })
  productId: number;
  @ApiProperty({ description: 'Цена' })
  price: number;
  @ApiProperty({ description: 'Процент скидки' })
  discount: number;
}

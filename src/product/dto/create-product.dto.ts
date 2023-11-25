import { ApiProperty } from '@nestjs/swagger';
import { HasOne } from 'sequelize-typescript';
import { Price } from 'src/price/models/price.model';

export class CreateProductDto {
  @ApiProperty({ description: 'Наименование' })
  name: string;
  @ApiProperty({ description: 'Каталог' })
  category: string;
  @ApiProperty({ description: 'Артикул' })
  articul: string;
  @ApiProperty({ description: 'Наименование фирмы' })
  brend: string;
  @ApiProperty({ description: 'Произведено' })
  madeIn: string;
  @ApiProperty({ description: 'Масса в г' })
  mass: number;
  @ApiProperty({ description: 'Цена' })
  @HasOne(() => Price, 'userId')
  price: Price;
}

export class ProductFiltered {
  @ApiProperty({ description: 'Минимальная сумма' })
  minPrice: number;
  @ApiProperty({ description: 'Максимальная сумма' })
  maxPrice: number;
  @ApiProperty({ description: 'Список категорий' })
  category?: string[];
}

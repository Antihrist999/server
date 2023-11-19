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

import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @ApiProperty({ description: 'Наименование' })
  @Column
  name: string;
  @ApiProperty({ description: 'Каталог' })
  @Column
  category: string;
  @ApiProperty({ description: 'Артикул' })
  @Column
  articul: string;
  @ApiProperty({ description: 'Наименование фирмы' })
  @Column
  brend: string;
  @ApiProperty({ description: 'Произведено' })
  @Column
  madeIn: string;
  @ApiProperty({ description: 'Масса в г' })
  @Column
  mass: number;
}

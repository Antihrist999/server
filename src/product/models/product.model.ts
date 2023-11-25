import { ApiProperty } from '@nestjs/swagger';
import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Picture } from 'src/picture/models/picture.model';
import { Price } from 'src/price/models/price.model';
import { Rating } from 'src/rating/models/rating.model';

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
  @ApiProperty({ description: 'Изображение' })
  @HasOne(() => Picture, 'parentId')
  picture: Picture;
  @ApiProperty({ description: 'Информация о цене' })
  @HasOne(() => Price, 'productId')
  price: Price;
  @ApiProperty({ description: 'Рейтинг' })
  @HasMany(() => Rating, 'productId')
  rating: [Rating];
}

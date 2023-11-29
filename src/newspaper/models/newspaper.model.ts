import { ApiProperty } from '@nestjs/swagger';
import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import { Picture } from 'src/picture/models/picture.model';

@Table
export class Newspaper extends Model {
  @ApiProperty({ description: 'Идентификатор' })
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;
  @Column
  @ApiProperty({ description: 'Заголовок' })
  header: string;
  @ApiProperty({ description: 'Текст' })
  @Column
  text: string;
  @ApiProperty({ description: 'Изображение' })
  @HasOne(() => Picture, 'parentId')
  picture: Picture;
}

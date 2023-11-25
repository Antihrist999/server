import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Picture extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  @ApiProperty({ description: 'Идентификатор' })
  id: number;
  @Column
  @ApiProperty({ description: 'Изображение' })
  image: string;
  @Column
  @ApiProperty({ description: 'Тип изображения' })
  type: string;
  @Column
  @ApiProperty({ description: 'Идентификатор родителя' })
  parentId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IndividualCard extends Model {
  @Column({ unique: true, autoIncrement: true, primaryKey: true })
  @ApiProperty({ description: 'Идентификатор карточки' })
  id: number;
  @ApiProperty({ description: 'Баланс бонусов' })
  @Column
  account: number;
  @ApiProperty({ description: 'Ид пользователя' })
  @Column
  userId: number;
}

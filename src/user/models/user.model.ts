import { ApiProperty } from '@nestjs/swagger';
import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import { IndividualCard } from 'src/individual-card/models/individual-card.model';

@Table
export class User extends Model {
  @ApiProperty({ description: 'Имя' })
  @Column
  firstName: string;
  @ApiProperty({ description: 'Фамилия' })
  @Column
  lastName: string;

  @ApiProperty({ description: 'Статус' })
  @Column({ defaultValue: true })
  isActive: boolean;

  @ApiProperty({ description: 'Индивидуальной карта' })
  @HasOne(() => IndividualCard, 'userId')
  account: IndividualCard;
}

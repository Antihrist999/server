import { ApiProperty } from '@nestjs/swagger';

export class CreateIndividualCardDto {
  @ApiProperty({ description: 'Баланс бонусов' })
  account: number;
  @ApiProperty({ description: 'Ид пользователя' })
  userId: number;
}

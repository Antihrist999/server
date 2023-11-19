import { PartialType } from '@nestjs/mapped-types';
import { CreateIndividualCardDto } from './create-individual-card.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateIndividualCardDto extends PartialType(
  CreateIndividualCardDto,
) {
  @ApiProperty({ description: 'Баланс бонусов' })
  account: number;
}

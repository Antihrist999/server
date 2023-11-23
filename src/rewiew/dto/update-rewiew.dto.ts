import { PartialType } from '@nestjs/swagger';
import { CreateRewiewDto } from './create-rewiew.dto';
/* import { CreatePriceDto } from './create-rating.dto'; */

export class UpdatePriceDto extends PartialType(CreateRewiewDto) {}

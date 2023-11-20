import { PartialType } from '@nestjs/swagger';
import { CreateRatingDto } from './create-rating.dto';
/* import { CreatePriceDto } from './create-rating.dto'; */

export class UpdatePriceDto extends PartialType(CreateRatingDto) {}

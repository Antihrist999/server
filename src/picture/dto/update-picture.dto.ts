import { PartialType } from '@nestjs/swagger';
import { CreatePictureDto } from './create-picture.dto';
/* import { CreatePriceDto } from './create-rating.dto'; */

export class UpdatePictureDto extends PartialType(CreatePictureDto) {}

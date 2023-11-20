import { PartialType } from '@nestjs/swagger';
import { CreateFavoriteDto } from './create-favorite.dto';

export class UpdatePriceDto extends PartialType(CreateFavoriteDto) {}

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Rating } from './models/price.model';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';

@ApiTags('Рейтинг')
@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}
  @Post()
  @ApiOperation({
    summary: 'Создать рейтинг',
  })
  @ApiResponse({ status: 200, type: Rating })
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список рейтингов',
  })
  @ApiResponse({ status: 200, type: [Rating] })
  findAll() {
    return this.ratingService.findAll();
  }
  @ApiOperation({
    summary: 'Получить рейтинг продукта',
  })
  @ApiResponse({ status: 200, type: [Rating] })
  @Get(':productId')
  findOne(@Param('productId') productId: number) {
    return this.ratingService.findOne(+productId);
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.RatingService.update(+id, updateRatingDto);
  } */
  @ApiOperation({
    summary: 'Удаление рейтинг',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingService.remove(+id);
  }
}

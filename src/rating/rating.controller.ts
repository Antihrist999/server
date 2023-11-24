import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Rating } from './models/rating.model';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';

@ApiTags('Рейтинг')
@Controller('ratings')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}
  @Post('update/')
  @ApiOperation({
    summary: 'Обновить',
  })
  @ApiResponse({ status: 200, type: Rating })
  update(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.update(createRatingDto);
  }
  @Post('create/')
  @ApiOperation({
    summary: 'Создать',
  })
  @ApiResponse({ status: 200, type: Rating })
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @Get('all/')
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
  findByProductId(@Param('productId') productId: number) {
    return this.ratingService.findByProductId(productId);
  }

  @ApiOperation({
    summary: 'Получить рейтинг продукта',
  })
  @ApiResponse({ status: 200, type: [Rating] })
  @Get('stat/:productId')
  findByProductIdStat(@Param('productId') productId: number) {
    return this.ratingService.findByProductIdStat(productId);
  }
  @ApiOperation({
    summary: 'Получить рейтинг пользователя по продукту',
  })
  @ApiResponse({ status: 200, type: [Rating] })
  @Get('ratingUser/:productId,:userId')
  findByProductIdAndUserId(
    @Param('productId') productId: number,
    @Param('userId') userId: number,
  ) {
    return this.ratingService.findByProductIdAndUserId(productId, userId);
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

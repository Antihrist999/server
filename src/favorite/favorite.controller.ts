import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Favorite } from './models/favorite.model';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { FavoriteService } from './favorite.service';

@ApiTags('Избранное')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}
  @Post()
  @ApiOperation({
    summary: 'Создать',
  })
  @ApiResponse({ status: 200, type: Favorite })
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get(':userId')
  @ApiOperation({
    summary: 'Получить список',
  })
  @ApiResponse({ status: 200, type: [Favorite] })
  findAll(@Param('userId') userId: number) {
    return this.favoriteService.findAll(userId);
  }
  @ApiOperation({
    summary: 'Получить список избранного',
  })
  @ApiResponse({ status: 200, type: [Favorite] })
  @Get(':productId')
  findOne(@Param('productId') productId: number) {
    return this.favoriteService.findOne(+productId);
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.FavoriteService.update(+id, updateFavoriteDto);
  } */
  @ApiOperation({
    summary: 'Удаление рейтинг',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}

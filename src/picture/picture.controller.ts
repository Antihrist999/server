import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Picture } from './models/picture.model';
import { CreatePictureDto } from './dto/create-picture.dto';
import { PictureService } from './picture.service';

@ApiTags('Отзывы')
@Controller('pictures')
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}
  @Post('update/')
  @ApiOperation({
    summary: 'Обновить',
  })
  @ApiResponse({ status: 200, type: Picture })
  update(@Body() createPictureDto: CreatePictureDto) {
    return this.pictureService.update(createPictureDto);
  }
  @Post('create/')
  @ApiOperation({
    summary: 'Создать',
  })
  @ApiResponse({ status: 200, type: Picture })
  create(@Body() createPictureDto: CreatePictureDto) {
    return this.pictureService.create(createPictureDto);
  }

  @Get('all/')
  @ApiOperation({
    summary: 'Получить список отзывов',
  })
  @ApiResponse({ status: 200, type: [Picture] })
  findAll() {
    return this.pictureService.findAll();
  }
  @ApiOperation({
    summary: 'Получить отзывы по продукту',
  })
  @ApiResponse({ status: 200, type: [Picture] })
  @Get(':productId')
  findByProductId(@Param('productId') productId: number) {
    return this.pictureService.findByProductId(productId);
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
    return this.PictureService.update(+id, updatePictureDto);
  } */
  @ApiOperation({
    summary: 'Удаление отзыв',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pictureService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Rewiew } from './models/rewiew.model';
import { CreateRewiewDto } from './dto/create-rewiew.dto';
import { RewiewService } from './rewiew.service';

@ApiTags('Отзывы')
@Controller('rewiews')
export class RewiewController {
  constructor(private readonly rewiewService: RewiewService) {}
  @Post('update/')
  @ApiOperation({
    summary: 'Обновить',
  })
  @ApiResponse({ status: 200, type: Rewiew })
  update(@Body() createRewiewDto: CreateRewiewDto) {
    return this.rewiewService.update(createRewiewDto);
  }
  @Post('create/')
  @ApiOperation({
    summary: 'Создать',
  })
  @ApiResponse({ status: 200, type: Rewiew })
  create(@Body() createRewiewDto: CreateRewiewDto) {
    return this.rewiewService.create(createRewiewDto);
  }

  @Get('all/')
  @ApiOperation({
    summary: 'Получить список отзывов',
  })
  @ApiResponse({ status: 200, type: [Rewiew] })
  findAll() {
    return this.rewiewService.findAll();
  }
  @ApiOperation({
    summary: 'Получить отзывы по продукту',
  })
  @ApiResponse({ status: 200, type: [Rewiew] })
  @Get(':productId')
  findByProductId(@Param('productId') productId: number) {
    return this.rewiewService.findByProductId(productId);
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateRewiewDto: UpdateRewiewDto) {
    return this.RewiewService.update(+id, updateRewiewDto);
  } */
  @ApiOperation({
    summary: 'Удаление отзыв',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rewiewService.remove(+id);
  }
}

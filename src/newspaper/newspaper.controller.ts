import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Newspaper } from './models/newspaper.model';
import { CreateNewspaperDto } from './dto/create-newspaper.dto';
import { NewspaperService } from './newspaper.service';

@ApiTags('Статьи')
@Controller('newspapers')
export class NewspaperController {
  constructor(private readonly newspaperService: NewspaperService) {}

  @Post('update/')
  @ApiOperation({
    summary: 'Обновить',
  })
  @ApiResponse({ status: 200, type: Newspaper })
  update(@Body() createNewspaperDto: CreateNewspaperDto) {
    return this.newspaperService.update(createNewspaperDto);
  }
  @Post('create/')
  @ApiOperation({
    summary: 'Создать',
  })
  @ApiResponse({ status: 200, type: Newspaper })
  create(@Body() createNewspaperDto: CreateNewspaperDto) {
    return this.newspaperService.create(createNewspaperDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список',
  })
  @ApiResponse({ status: 200, type: [Newspaper] })
  findAll() {
    return this.newspaperService.findAll();
  }
  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewspaperDto: UpdateNewspaperDto) {
    return this.NewspaperService.update(+id, updateNewspaperDto);
  } */
  @ApiOperation({
    summary: 'Удаление избранное',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newspaperService.remove(+id);
  }
}

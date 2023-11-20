import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { IndividualCardService } from './individual-card.service';
import { CreateIndividualCardDto } from './dto/create-individual-card.dto';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
/* import { UpdateIndividualCardDto } from './dto/update-individual-card.dto'; */
import { IndividualCard } from './models/individual-card.model';
@ApiTags('Индивидуальная карточка клиента')
@Controller('individualCards')
export class IndividualCardController {
  constructor(private readonly individualCardService: IndividualCardService) {}

  @Post()
  @ApiOperation({ summary: 'Создание/обновить индивидуальную карточку' })
  @ApiResponse({ status: 200, type: IndividualCard })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: IndividualCard,
  })
  upsert(@Body() createIndividualCardDto: CreateIndividualCardDto) {
    return this.individualCardService.upsert(createIndividualCardDto);
  }
  @Get()
  @ApiOperation({
    summary: 'Получить все карточки',
  })
  findAll() {
    return this.individualCardService.findAll();
  }

  @Get(':userId')
  @ApiOperation({
    summary: 'Получить индивидуальную карточку по ид пользователя',
  })
  findOne(@Param('userId') userId: number) {
    return this.individualCardService.findByUserId(+userId);
  }
  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить карточку',
  })
  remove(@Param('id') id: number) {
    return this.individualCardService.remove(+id);
  }
}

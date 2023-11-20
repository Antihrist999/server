import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PriceService } from './price.service';
import { CreatePriceDto } from './dto/create-price.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Price } from './models/price.model';

@ApiTags('Цена на продукты')
@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать цену на товар',
  })
  @ApiResponse({ status: 200, type: Price })
  create(@Body() createPriceDto: CreatePriceDto) {
    return this.priceService.create(createPriceDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Все цены',
  })
  @ApiResponse({ status: 200, type: [Price] })
  findAll() {
    return this.priceService.findAll();
  }
  @ApiOperation({
    summary: 'Цена по идентификатору продукта',
  })
  @ApiResponse({ status: 200, type: Price })
  @Get(':productId')
  findOne(@Param('productId') productId: number) {
    return this.priceService.findOne(+productId);
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updatePriceDto: UpdatePriceDto) {
    return this.priceService.update(+id, updatePriceDto);
  } */
  @ApiOperation({
    summary: 'Удаление цены',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceService.remove(+id);
  }
}

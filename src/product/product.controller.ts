import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateProductDto, ProductFiltered } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './models/Product.model';
@ApiTags('Продукты')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({
    summary: 'Создание продукта',
  })
  @ApiResponse({ status: 200, type: Product })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
  @Post('filtered/')
  @ApiOperation({
    summary: 'Фильтр',
  })
  @ApiResponse({ status: 200, type: Product })
  filtered(@Body() createProductDto: ProductFiltered) {
    return this.productService.filtered(createProductDto);
  }
  @Get()
  @ApiOperation({
    summary: 'Получить все продукты',
  })
  @ApiResponse({ status: 200, type: [Product] })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить продукт по ид',
  })
  @ApiResponse({ status: 200, type: Product })
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  @Get('/name/:name')
  @ApiOperation({
    summary: 'Получить продукт по Наименованию',
  })
  @ApiResponse({ status: 200, type: [Product] })
  findProductByName(@Param('name') name: string) {
    return this.productService.findProductByName(name);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить продукт',
  })
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}

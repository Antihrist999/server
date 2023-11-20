import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
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
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  /*  @Patch(':id')
  update(@Param('id') id: string) {
    return this.productService.update(+id);
  } */

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить продукт',
  })
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}

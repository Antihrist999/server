import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './models/cart.model';
@ApiTags('Корзина')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать корзину',
  })
  @ApiResponse({ status: 200, type: Cart })
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get(':userId')
  @ApiOperation({
    summary: 'Поиск корзины по ид пользователя',
  })
  @ApiResponse({ status: 200, type: Cart })
  findAll(@Param('userId') userId: number) {
    return this.cartService.findAll(userId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Поиск корзины по ид корзины',
  })
  @ApiResponse({ status: 200, type: Cart })
  findOne(@Param('id') id: number) {
    return this.cartService.findOne(+id);
  }

  /*   @Patch(':id')
  update(@Param('id') id: number, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  } */

  @Delete(':id')
  @ApiOperation({
    summary: 'Удаление корзины по ид',
  })
  @ApiResponse({ status: 200, type: Cart })
  remove(@Param('id') id: number) {
    return this.cartService.remove(+id);
  }
}

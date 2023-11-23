import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './models/cart.model';
@ApiTags('Корзина')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('all/:userId')
  @ApiOperation({
    summary: 'Поиск корзины по ид пользователя',
  })
  @ApiResponse({ status: 200, type: Cart })
  findAll(@Param('userId') userId: number) {
    return this.cartService.findAll(userId);
  }

  @Get(':userId,:productId')
  @ApiOperation({
    summary: 'Поиск корзины по ид корзины',
  })
  @ApiResponse({ status: 200, type: Cart })
  findByUserIdAndProductId(
    @Param('userId') userId: number,
    @Param('productId') productId: number,
  ) {
    return this.cartService.findByUserIdAndProductId(userId, productId);
  }

  @Post('update/')
  @ApiOperation({
    summary: 'Обновить корзину',
  })
  @ApiResponse({ status: 200, type: Cart })
  update(@Body() createCartDto: CreateCartDto) {
    return this.cartService.update(createCartDto);
  }
  @Post('create')
  @ApiOperation({
    summary: 'Создать корзину',
  })
  @ApiResponse({ status: 200, type: Cart })
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удаление корзины по ид',
  })
  @ApiResponse({ status: 200, type: Cart })
  remove(@Param('id') id: number) {
    return this.cartService.remove(+id);
  }
}

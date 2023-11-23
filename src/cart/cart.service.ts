import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './models/cart.model';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart)
    private readonly cartModel: typeof Cart,
  ) {}

  async findAll(userId: number): Promise<Cart[]> {
    return this.cartModel.findAll({
      where: {
        userId,
      },
      include: {
        all: true,
        include: [
          {
            all: true,
          },
        ],
      },
    });
  }

  findOne(id: number): Promise<Cart> {
    return this.cartModel.findOne({
      where: {
        id,
      },
    });
  }
  findByUserId(userId: number): Promise<Cart> {
    return this.cartModel.findOne({
      where: {
        userId,
      },
      include: {
        all: true,
        include: [
          {
            all: true,
          },
        ],
      },
    });
  }
  findByUserIdAndProductId(userId: number, productId: number): Promise<Cart> {
    return this.cartModel.findOne({
      where: {
        userId,
        productId,
      },
    });
  }
  update(createCartDto: CreateCartDto): Promise<Cart> {
    this.cartModel.update(
      { ...createCartDto },
      { where: { id: createCartDto.id } },
    );
    return this.cartModel.findOne({
      where: {
        id: createCartDto.id,
      },
    });
  }

  create(createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartModel.create({
      ...createCartDto,
    });
  }
  async remove(id: number): Promise<void> {
    const Cart = await this.findOne(id);
    await Cart.destroy();
  }
}

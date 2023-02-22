import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartRequest } from './dto/add-to-cart.request';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async addToCart(@Body() request: AddToCartRequest, @Req() req: any) {
    return this.cartService.addToCart(request, req.cookies?.Authentication);
  }

  @Get()
  async getCartItems() {
    return this.cartService.getCartItems();
  }
}

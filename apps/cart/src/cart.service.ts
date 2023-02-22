import { Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { AddToCartRequest } from './dto/add-to-cart.request';

@Injectable()
export class CartService {

  constructor(
    private readonly cartRepository: CartRepository,
  ) {}

  async addToCart(request: AddToCartRequest, authentication: string) {
    this.cartRepository.create(request);
  }

  async getCartItems() {
    return this.cartRepository.find({});
  }
}

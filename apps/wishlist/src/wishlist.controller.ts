import { Controller, Get } from '@nestjs/common';
import { WishlistService } from './wishlist.service';

@Controller()
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  getHello(): string {
    return this.wishlistService.getHello();
  }
}

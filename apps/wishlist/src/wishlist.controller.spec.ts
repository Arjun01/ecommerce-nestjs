import { Test, TestingModule } from '@nestjs/testing';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';

describe('WishlistController', () => {
  let wishlistController: WishlistController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WishlistController],
      providers: [WishlistService],
    }).compile();

    wishlistController = app.get<WishlistController>(WishlistController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(wishlistController.getHello()).toBe('Hello World!');
    });
  });
});

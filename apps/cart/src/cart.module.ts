import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Cart, CartSchema } from './schemas/cart.schema';
import { CartRepository } from './cart.repository';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string().required(),
      PORT: Joi.number().required(),
  }),
  envFilePath: './apps/cart/.env',
  }),
  DatabaseModule,
  MongooseModule.forFeature([{name: Cart.name, schema: CartSchema}])
 ],
  controllers: [CartController],
  providers: [CartService, CartRepository],
})
export class CartModule {}

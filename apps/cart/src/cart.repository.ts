import { AbstractRepository } from "@app/common";
import { Logger } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { Cart } from "./schemas/cart.schema";

@Injectable()
export class CartRepository extends AbstractRepository<Cart>{
    protected readonly logger = new Logger(CartRepository.name)

    constructor(
        @InjectModel(Cart.name) cartModel: Model<Cart>,
        @InjectConnection() connection: Connection,
    ){
        super(cartModel,connection);
    }
    
}
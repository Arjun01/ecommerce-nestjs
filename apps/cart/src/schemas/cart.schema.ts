import { AbstractDocument } from "@app/common";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

@Schema({versionKey: false})
export class Cart extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    quantity: number;

    @Prop()
    productId: string;

}

export const CartSchema = SchemaFactory.createForClass(Cart);
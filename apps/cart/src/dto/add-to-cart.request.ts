import {
    IsNotEmpty,
    IsNumber,
    IsPhoneNumber,
    IsPositive,
    IsString,
  } from 'class-validator';
  
  export class AddToCartRequest {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsPositive()
    price: number;
  
    @IsNumber()
    @IsPositive()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    productId : string
  }
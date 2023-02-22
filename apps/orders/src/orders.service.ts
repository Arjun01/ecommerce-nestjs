import { Inject, Injectable } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
// import { BILLING_SERVICE } from './constants/services';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
  ) {}

  async createOrder(request: CreateOrderRequest, authentication: string) {
    this.ordersRepository.create(request);
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
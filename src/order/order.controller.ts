import { Controller, Post, OnModuleInit, Body } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { concatMap, from, of, scan } from 'rxjs';
import { grpcClientOptions } from 'src/config/grpc-client.options';
import { PaymentResponse, PaymentService } from 'src/proto/build/payment';
import { PaymentFactory } from './factory/payment.factory';
import { Order } from './types/Order';

@Controller('order')
export class OrderController implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private paymentService: PaymentService;

  onModuleInit(): void {
    this.paymentService =
      this.client.getService<PaymentService>('PaymentService');
  }

  @Post()
  async saveOrder(@Body() order: Order): Promise<PaymentResponse> {
    return this.paymentService.process(PaymentFactory.create(order));
  }

  @Post('/stream')
  async saveOrders(@Body() orders: Order[]) {
    const payments = orders.map((order, index) =>
      PaymentFactory.create(order, index),
    );

    return this.paymentService.processStream(from(payments)).pipe(
      concatMap((value) => of(value)),
      scan((acc, value) => {
        acc.push(value);
        return acc;
      }, []),
    );
  }
}

/* eslint-disable */
import { Observable } from 'rxjs';

export const protobufPackage = 'dev.lipejose.paymentprocessor';

export interface PaymentRequest {
  card: Card | undefined;
  order: Order | undefined;
  provider: string;
}

export interface Card {
  number: string;
  ccv: string;
  exp: string;
  name: string;
  brand: string;
}

export interface Order {
  orderId: string;
  amount: number;
  customer: Customer | undefined;
}

export interface Customer {
  firstName: string;
  lastName: string;
}

export interface PaymentResponse {
  success: boolean;
  orderId: string;
  transactionId: string;
  message: string;
  code: number;
}

export interface PaymentService {
  process(request: PaymentRequest): Promise<PaymentResponse>;
  processStream(
    request: Observable<PaymentRequest>,
  ): Observable<PaymentResponse>;
}

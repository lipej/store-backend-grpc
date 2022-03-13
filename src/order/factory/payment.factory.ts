import { v4 } from 'uuid';
import { PaymentRequest } from 'src/proto/build/payment';
import { Order } from '../types/Order';

export class PaymentFactory {
  static create({ cart, card, name }: Order, index?: number): PaymentRequest {
    const [firstName, lastName] = name.split(' ');

    return {
      card: {
        brand: card.brand,
        ccv: card.ccv,
        exp: card.expiration,
        number: card.number,
        name,
      },
      order: {
        amount: cart.reduce((acc, x) => (acc += x.price * x.qtd), 0),
        customer: {
          firstName,
          lastName,
        },
        orderId: v4(),
      },
      provider: index ? index % 2 === 0 ? 'cielo' : 'unkown' : 'cielo',
    };
  }
}

# Order gRPC payment

This app is an alternative to proxy for transpile gRPC calls to [payment processor app](https://github.com/lipejose/payment-processor-grpc)

## Routes

- `/order` , method: `POST`, body type: Order, process one payment.
- `/stream`, method: `POST`, body type: Order[], process multiples payment.
- `/products`, method `GET`, return a product list, is not being used.

## Types

```typescript
type Order = {
  name: string;
  email: string;
  card: Card;
  cart: Cart[];
};

type Card = {
  number: string;
  ccv: string;
  expiration: string;
  brand: string;
};

type Cart = {
  name: string;
  id: string;
  price: number;
  img: string;
  qtd: number;
};
````


## Config

In `grpc-client.options.ts` need to set the server url and port

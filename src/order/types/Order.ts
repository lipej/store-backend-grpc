export type Order = {
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

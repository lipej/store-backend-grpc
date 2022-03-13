import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  index(){
    return [
      {
        name: 'Xbox Series S 500GB',
        id: '1',
        price: 259900,
        img: 'https://i.ibb.co/jGhg53Q/0e298c38a02fad978312b4697a17335e.jpg'
      },
      {
        name: 'Macbook Pro 13"',
        id: '2',
        price: 1394907,
        img: 'https://i.ibb.co/5cs3ZvK/4c343f053c1e4cc58af15fa06bb19d4f.jpg'
      },
      {
        name: 'HP Dragonfly',
        id: '3',
        price: 854905,
        img: 'https://i.ibb.co/nkPz8FJ/e4c244ffb5e89b1699379d9252816d0d.jpg'
      },
      {
        name: 'Aspirador de Pó',
        id: '4',
        price: 42655,
        img: 'https://i.ibb.co/y8Jf485/c39269aecf3b6494aa9fccc67287bd6a.jpg'
      },
      {
        name: 'Impressora HP',
        id: '2',
        price: 37905,
        img: 'https://i.ibb.co/8KcVVX7/44c3e3a6bfa08bf73ecdc5dfff48cc1c.jpg'
      },
      {
        name: 'Panela tramontina',
        id: '2',
        price: 29990,
        img: 'https://i.ibb.co/7Q1N1RQ/be6b7ac62323a3c557de543b7ad23a2d.jpg'
      }
    ]
  }
}

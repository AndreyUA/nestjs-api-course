export class FindProductDto {
  category: string;
  limit: number;
}

export class ProductDto {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: Array<string>;
  tags: string;
  characteristics: {
    [key: string]: string;
  };
  createdAt: Date;
}

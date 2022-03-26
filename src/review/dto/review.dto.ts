export class CreateReviewDto {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
  productId: string;
}

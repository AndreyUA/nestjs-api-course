import { IsString, IsUUID, IsNumber, IsDate, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsUUID()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @Max(5)
  @Min(1, { message: 'less then 1' })
  rating: number;

  @IsString()
  productId: string;
}

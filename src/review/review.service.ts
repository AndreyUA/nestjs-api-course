import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// Schemas
import { Review, ReviewDocument } from './review.schema';

// Types
import { CreateReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    return new this.reviewModel(dto).save();
  }

  async delete(id: string): Promise<Review | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async getByProduct(id: string): Promise<Array<Review> | null> {
    return this.reviewModel
      .find({
        productId: id,
      })
      .exec();
  }
}

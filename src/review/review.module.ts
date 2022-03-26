import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { Review, ReviewSchema } from './review.schema';

// Controllers
import { ReviewController } from './review.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Review.name,
        schema: ReviewSchema,
      },
    ]),
  ],
  controllers: [ReviewController],
})
export class ReviewModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// Schemas
import { Product } from '../product/product.schema';

export type ReviewDocument = Review & mongoose.Document;

@Schema()
export class Review {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  createdAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  productId: Product;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

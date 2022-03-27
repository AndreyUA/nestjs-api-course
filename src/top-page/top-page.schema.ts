import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Types
import { TopLevelCategoryTypes } from './dto/find-top-page.dto';

class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

class TopPageAdvantage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export type TopPageDocument = TopPage & Document;

@Schema()
export class TopPage {
  @Prop()
  _id: string;

  @Prop({ enum: TopLevelCategoryTypes })
  firstCategory: TopLevelCategoryTypes;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop({ type: () => HhData })
  hh?: HhData;

  @Prop({ type: () => [TopPageAdvantage] })
  advantages: Array<TopPageAdvantage>;

  @Prop()
  seoText: string;

  @Prop()
  tagsTitle: string;

  @Prop({ type: () => [String] })
  tags: Array<string>;
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);

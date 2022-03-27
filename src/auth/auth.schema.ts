import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth implements SchemaOptions {
  _id: true;

  @Prop({ unique: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);

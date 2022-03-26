import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop()
  _id: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;

  @Prop()
  createdAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);

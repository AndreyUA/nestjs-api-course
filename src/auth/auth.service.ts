import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { genSalt, hash } from 'bcryptjs';
import { v4 as uuid } from 'uuid';

// Schemas
import { Auth, AuthDocument } from './auth.schema';

// Types
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private readonly authModel: Model<AuthDocument>,
  ) {}

  async createUser(dto: AuthDto): Promise<AuthDocument> {
    const salt = await genSalt(6);
    const hashedPassword = await hash(dto.password, salt);

    const newUser = new this.authModel({
      email: dto.login,
      passwordHash: hashedPassword,
      _id: uuid(),
    });

    return newUser.save();
  }

  async findExistingUser(email: string) {
    return this.authModel.findOne({ email }).exec();
  }
}

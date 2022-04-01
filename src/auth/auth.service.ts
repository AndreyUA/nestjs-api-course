import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

// Schemas
import { Auth, AuthDocument } from './auth.schema';

// Types
import { AuthDto } from './dto/auth.dto';

// Constants
import { INCORRECT_CREDENTIALS } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private readonly authModel: Model<AuthDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: AuthDto): Promise<AuthDocument> {
    const salt = await genSalt(6);
    const hashedPassword = await hash(dto.password, salt);

    const newUser = new this.authModel({
      email: dto.login,
      passwordHash: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newUser.save();
  }

  async findExistingUser(email: string) {
    return this.authModel.findOne({ email }).exec();
  }

  async validateUser(dto: AuthDto): Promise<Pick<Auth, 'email'>> {
    const { login, password } = dto;

    const user = await this.findExistingUser(login);

    // Check if user exists
    if (!user) {
      throw new UnauthorizedException(INCORRECT_CREDENTIALS);
    }

    // Check user's password
    const isPasswordCorrect = await compare(password, user.passwordHash);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException(INCORRECT_CREDENTIALS);
    }

    return { email: user.email };
  }

  async login(email: string) {
    const payload = { email };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}

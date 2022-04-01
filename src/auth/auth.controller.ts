import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

// Services
import { AuthService } from './auth.service';

// Types
import { AuthDto } from './dto/auth.dto';

// Constants
import { ALREADY_REGISTERED_ERROR } from './auth.constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const existingUser = await this.authService.findExistingUser(dto.login);

    if (existingUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }

    return this.authService.createUser(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {
    const { email } = await this.authService.validateUser(dto);

    return this.authService.login(email);
  }
}

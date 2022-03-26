import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { Auth, AuthSchema } from './auth.schema';

// Controllers
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Auth.name,
        schema: AuthSchema,
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}

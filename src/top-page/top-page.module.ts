import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Schemas
import { TopPage, TopPageSchema } from './top-page.schema';

// Controllers
import { TopPageController } from './top-page.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TopPage.name,
        schema: TopPageSchema,
      },
    ]),
  ],
  controllers: [TopPageController],
})
export class TopPageModule {}

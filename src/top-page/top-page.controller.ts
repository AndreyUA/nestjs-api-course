import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TopPageDto, FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPageDto, '_id'>) {
    console.log(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const test = this.configService.get<string>('TEST');
    console.log(test);

    console.log(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageDto) {
    console.log(id);
    console.log(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {
    console.log(dto);
  }
}

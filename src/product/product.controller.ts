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

// Types
import { FindProductDto, ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductDto, '_id'>) {
    console.log(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    console.log(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductDto) {
    console.log(id);
    console.log(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {
    console.log(dto);
  }
}

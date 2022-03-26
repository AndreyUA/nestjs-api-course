import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ReviewDto } from './dto/review.dto';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewDto, '_id'>) {
    console.log(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    console.log(productId);
  }
}

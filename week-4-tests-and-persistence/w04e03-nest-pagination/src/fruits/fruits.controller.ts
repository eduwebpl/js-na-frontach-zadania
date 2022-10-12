import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { FruitsRepository } from './fruits.repository';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsRepository: FruitsRepository) {}

  @Get()
  getAll(@Req() req) {
    const { skip, limit }: { skip?: string; limit?: string } = req.query;
    let computedSkip = 0;
    if (skip) {
      computedSkip = Number(skip);
    }
    let computedLimit;
    if (limit) {
      computedLimit = Number(limit);
    }
    return this.fruitsRepository.find({
      skip: computedSkip,
      limit: computedLimit,
    });
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.fruitsRepository.findOne({ id });
  }
}

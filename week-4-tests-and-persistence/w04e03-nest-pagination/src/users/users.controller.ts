import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Controller('users')
export class UsersController {
  constructor(private readonly usersRepository: UsersRepository) {}

  @Get()
  getAll(@Req() req) {
    const { skip, limit } = req.query;
    let computedSkip = 0;
    if (skip) {
      computedSkip = Number(skip);
    }
    let computedLimit;
    if (limit) {
      computedLimit = Number(limit);
    }
    return this.usersRepository.find({
      skip: computedSkip,
      limit: computedLimit,
    });
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersRepository.findOne({ id });
  }
}

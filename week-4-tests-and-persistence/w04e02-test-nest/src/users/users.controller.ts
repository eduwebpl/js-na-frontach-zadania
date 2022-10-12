import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignOutDto } from './dto/sign-out.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: SignInDto) {
    const token = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    return { token };
  }

  @Put('sign-out')
  @UseGuards(AuthGuard)
  async signIOut(@Body() signOutDto: SignOutDto) {
    await this.authService.signOut(signOutDto.userId);
    return { signOut: 'ok' };
  }

  @Get('')
  @UseGuards(AuthGuard)
  allUsers() {
    return this.usersService.getAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOne({ id });
  }
}

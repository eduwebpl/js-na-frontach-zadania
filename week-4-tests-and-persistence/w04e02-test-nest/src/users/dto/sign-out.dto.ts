import { IsInt } from 'class-validator';

export class SignOutDto {
  @IsInt()
  userId: number;
}

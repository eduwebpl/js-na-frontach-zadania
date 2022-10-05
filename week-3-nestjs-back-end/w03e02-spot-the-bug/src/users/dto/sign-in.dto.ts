import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  email: string;
}

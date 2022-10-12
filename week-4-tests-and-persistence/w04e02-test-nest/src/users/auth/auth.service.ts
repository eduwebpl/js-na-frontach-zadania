import { HttpException, Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UsersService } from '../users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, password: string): Promise<string> {
    try {
      const user = await this.usersService.getOne(
        {
          email: email.toLowerCase(),
        },
        true,
      );
      const isValid = await compare(password, user.password);
      if (!isValid) {
        throw new Error('Invalid password');
      }
      const authToken = this.generateToken(user.id);
      await this.usersService.saveToken(user.id, authToken);
      return authToken;
    } catch (e) {
      throw new HttpException(e.message, 401);
    }
  }

  signOut(userId: number) {
    return this.usersService.saveToken(userId, null);
  }

  async authorizeRequest(tokenValue: string) {
    try {
      const user = await this.usersService.getOne({ accessToken: tokenValue });
      return Boolean(user);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message);
        throw new HttpException('Not authorized', 403);
      }
      return false;
    }
  }

  private generateToken(userId: number): string {
    const date = new Date();
    return (date.getTime() + userId).toString(36);
  }
}

import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Token } from './model/Token';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  private validTokens: Token[] = [];
  private currentUser?: User;

  constructor(private usersService: UsersService) {}

  async signIn(email: string): Promise<string> {
    try {
      this.currentUser = await this.usersService.getOne(email);
      const authToken = this.generateToken(this.currentUser.id);
      this.validTokens.push(authToken);
      return authToken.value;
    } catch (e) {
      this.currentUser = undefined;
      return '';
    }
  }

  authorizeRequest(tokenValue: string): boolean {
    const foundToken = this.validTokens.find((t) => t.value === tokenValue);
    return Boolean(foundToken);
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  private generateToken(userId: number): Token {
    const date = new Date();
    return {
      userId,
      iat: date.toISOString(),
      value: date.getTime().toString(36),
    };
  }
}

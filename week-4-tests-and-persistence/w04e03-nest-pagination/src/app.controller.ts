import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  private serverUpSince = new Date();

  @Get()
  getHello() {
    return { serverUpSince: this.serverUpSince };
  }
}

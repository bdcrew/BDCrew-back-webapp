import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): { test: string } {
    return { test: '안녕하세요 테스트' };
  }
}

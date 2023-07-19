import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Header('Content-Type', 'text/html')
  @Get()
  getHello(): {name: string}{
    return {name: 'Req'};
  }
}

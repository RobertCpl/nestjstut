import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('robert')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cieplinski')
  getHello(@Req() request: Request): string {
    // console.log(request);
    return this.appService.getHello();
  }
}

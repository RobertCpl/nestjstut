import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Req } from '@nestjs/common';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { Student } from './student.entities';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Student)
    private readonly repository: Repository<Student>,
  ) {}

  @Get()
  findAll(@Req() request: Request): string {
    // console.log(request);
    return 'findall';
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    // console.log(request);
    return id;
  }

  @Post()
  create(@Body() input) {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id, @Body() input) {
    return {
      id: id,
      body: input,
    };
  }
}

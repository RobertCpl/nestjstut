import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entities';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'Robert',
      password: 'Robert',
      database: 'students',
      entities: [Student],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

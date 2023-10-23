import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Rcieplinski81!',
      database: 'student_data',
      entities: [Student],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

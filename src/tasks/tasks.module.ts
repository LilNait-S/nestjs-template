import { Module } from '@nestjs/common';
import { TaksController } from './tasks.controller';
import { TasksService } from './tasks.service';
@Module({
  controllers: [TaksController],
  providers: [TasksService],
})
export class TaksModule {}

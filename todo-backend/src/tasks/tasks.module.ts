import { Module } from '@nestjs/common';
import { TasksController } from './entities/tasks.controller';
import { TasksService } from './entities/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
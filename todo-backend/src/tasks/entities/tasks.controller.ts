import { Controller, Post, Get, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<{ message: string }> {
    await this.tasksService.remove(+id);
    return { message: `Task with ID ${id} deleted successfully` };
  }
}
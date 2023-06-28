import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TaskDTO } from 'dto/task';
import { TaskService } from '../services/task.service';

@Controller('working-control/tasks')
export class TaskController {
  constructor(
    @Inject('LOGGER_SERVICE') private readonly client: ClientProxy,
    private readonly taskService: TaskService,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() task: TaskDTO) {
    return this.taskService.create(task);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task: TaskDTO) {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return !!(await this.taskService.remove(id));
  }
}

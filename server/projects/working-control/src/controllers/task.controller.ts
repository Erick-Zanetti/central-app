import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TaskDTO } from '../dto/task';
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

  @Get('by-month')
  getTasks(@Query('month', ParseIntPipe) month: number, @Query('year', ParseIntPipe) year: number) {
    console.log('month', month);
    console.log('year', year);

    return this.taskService.getTasks(month, year);
  }

  @Get('prices')
  getPrices() {
    return this.taskService.getPrices();
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

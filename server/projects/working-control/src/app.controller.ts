import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TaskDTO } from 'dto/task';
import { AppService } from './app.service';

const logger = new Logger('ClientAppController');
@Controller('working-control')
export class AppController {
  constructor(
    @Inject('LOGGER_SERVICE') private readonly client: ClientProxy,
    private readonly appService: AppService,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get('test-micro-service')
  emitMessage() {
    logger.log('In Microservice Client');
    this.client.emit<any>('log_message', { text: 'Service Communicating' });
    return this.appService.getHello();
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() task: TaskDTO) {
    return this.appService.create(task);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() task: TaskDTO) {
    return this.appService.update(id, task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return !!(await this.appService.remove(id));
  }
}

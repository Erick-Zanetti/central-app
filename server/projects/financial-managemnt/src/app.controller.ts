import { FinancialReleaseDTO } from './../dto/financial-release.dto';
import { Body, Controller, Delete, Get, Inject, Logger, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

const logger = new Logger("ClientAppController");
@Controller('financial-release')
export class AppController {

  constructor(
    @Inject('LOGGER_SERVICE') private readonly client: ClientProxy,
    private readonly appService: AppService
  ) { }

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get('test-micro-service')
  emitMessage() {
    logger.log("In Microservice Client");
    this.client.emit<any>('log_message', { text: 'Service Communicating' });
    return this.appService.getHello();
  }

  @Post()
  create(@Body() createUserDto: FinancialReleaseDTO) {
    return this.appService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: FinancialReleaseDTO) {
    return this.appService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return !!(await this.appService.remove(id));
  }
}
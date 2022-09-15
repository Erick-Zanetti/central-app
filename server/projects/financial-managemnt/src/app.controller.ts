import { FinancialReleaseType } from './../models/financial-release.schema';
import { FinancialReleaseDTO } from './../dto/financial-release.dto';
import { Body, Controller, Delete, Get, Inject, Logger, Param, ParseEnumPipe, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
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

  @Get('by-type')
  findByType(@Query('type', new ParseEnumPipe(FinancialReleaseType)) type: FinancialReleaseType, @Query('month', ParseIntPipe) month: number, @Query('year', ParseIntPipe) year: number) {
    return this.appService.findByType(type, month, year);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() financialReleaseDTO: FinancialReleaseDTO) {
    return this.appService.create(financialReleaseDTO);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() financialReleaseDTO: FinancialReleaseDTO) {
    return this.appService.update(id, financialReleaseDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return !!(await this.appService.remove(id));
  }
}
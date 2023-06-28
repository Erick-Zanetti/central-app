import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MonthValueDTO } from 'dto/month-value';
import { MonthValueService } from '../services/month-value.service';

@Controller('working-control/month-value')
export class MonthValueController {
  constructor(
    @Inject('LOGGER_SERVICE') private readonly client: ClientProxy,
    private readonly monthValueService: MonthValueService,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Post()
  create(@Body() monthValueDTO: MonthValueDTO) {
    return this.monthValueService.create(monthValueDTO);
  }

  @Get('by-month-year')
  findOne(@Query('month') month: string, @Query('year') year: string) {
    return this.monthValueService.findOne(+month, +year);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() monthValueDTO: MonthValueDTO) {
    return this.monthValueService.update(id, monthValueDTO);
  }
}

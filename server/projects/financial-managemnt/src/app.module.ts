import { AppService } from './app.service';
import { FinancialReleaseSchema, FinancialRelease } from './../models/financial-release.schema';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'LOGGER_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 3000 } },
    ]),
    MongooseModule.forRoot('mongodb://localhost:27017/financial-management'),
    MongooseModule.forFeature([
      { name: FinancialRelease.name, schema: FinancialReleaseSchema },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
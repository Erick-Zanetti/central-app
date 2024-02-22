import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancialRelease, FinancialReleaseSchema } from './models/financial-release.schema';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'LOGGER_SERVICE', transport: Transport.TCP, options: { host: 'server', port: 3000 } },
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
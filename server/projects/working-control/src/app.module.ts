import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './../models/task.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LOGGER_SERVICE',
        transport: Transport.TCP,
        options: { host: 'server', port: 3000 },
      },
    ]),
    MongooseModule.forRoot('mongodb://mongodb:27017/working-control'),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

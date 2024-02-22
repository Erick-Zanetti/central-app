import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { MonthValueController } from './controllers/month-value.controller';
import { TaskController } from './controllers/task.controller';
import { MonthValue, MonthValueSchema } from './models/month-value.schema';
import { Task, TaskSchema } from './models/task.schema';
import { MonthValueService } from './services/month-value.service';
import { TaskService } from './services/task.service';

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
    MongooseModule.forFeature([
      { name: Task.name, schema: TaskSchema },
      { name: MonthValue.name, schema: MonthValueSchema },
    ]),
  ],
  controllers: [TaskController, MonthValueController],
  providers: [TaskService, MonthValueService],
})
export class AppModule {}

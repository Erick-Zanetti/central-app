import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'server',
    port: 3000
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceOptions
  );
  await app.listen();
}
bootstrap();

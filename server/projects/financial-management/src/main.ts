import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.APP_ENV !== 'production') {
    app.enableCors({
      allowedHeaders: '*',
      methods: 'GET, PUT, POST, DELETE, PATCH',
      origin: '*',
      credentials: false,
    });
  } else {
    app.enableCors({
      origin: process.env.FE_URL,
      credentials: true,
    });
  }
  await app.listen(3001);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const APP_PORT: string = new ConfigService().getOrThrow<string>('APP_PORT');
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const config = app.get(ConfigService);
  const port = Number(config.getOrThrow<string>('PORT')) || 3100;
  await app.listen(port);
}
bootstrap();

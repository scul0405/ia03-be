import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: /.+/ });

  await mongoose.connect(process.env.DATABASE_URI);

  await app.listen(3000);
}
bootstrap();

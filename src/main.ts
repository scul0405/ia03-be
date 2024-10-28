import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://ia03-user-registration-21120353.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  await mongoose.connect(process.env.DATABASE_URI);

  await app.listen(3000);
}
bootstrap();

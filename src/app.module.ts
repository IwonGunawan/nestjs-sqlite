import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './db/database.config';

@Module({
  imports: [ProductModule, SequelizeModule.forRoot(databaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

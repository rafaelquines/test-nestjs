import { SupplyModule } from './supply/supply.module';
import { CustomerModule } from './customer/customer.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(), CustomerModule, SupplyModule,
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule { }

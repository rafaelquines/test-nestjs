import { Module } from '@nestjs/common';
import { SupplyService } from './supply.service';
import { SupplyController } from './supply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supply } from './supply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Supply])],
  components: [SupplyService],
  controllers: [SupplyController],
})
export class SupplyModule {}
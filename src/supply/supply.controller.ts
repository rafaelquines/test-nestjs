import { Controller, Get } from '@nestjs/common';
import { SupplyService } from './supply.service';
import { Supply } from './supply.entity';

@Controller('supply')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Get()
  findAll(): Promise<Supply[]> {
    return this.supplyService.findAll();
  }

  @Get('sohid')
  findAllId(): Promise<Supply[]> {
    return this.supplyService.findAllSohId();
  }
}
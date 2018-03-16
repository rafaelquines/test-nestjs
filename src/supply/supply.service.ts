import { Component } from '@nestjs/common';
import { Supply } from './supply.entity';

@Component()
export class SupplyService {
  async findAll(): Promise<Supply[]> {
    return await Supply.find();
  }

  async findAllSohId(): Promise<Supply[]> {
    return await Supply.find({ select: ['id'] });
  }
}
import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Component()
export class CustomerService {
  async findAll(): Promise<Customer[]> {
    return await Customer.find();
  }

  async findAllSohId(): Promise<Customer[]> {
    return await Customer.getSohId();
  }
}
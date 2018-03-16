import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 500 })
  email: string;

  public static getSohId = () => {
    return Customer.find({ select: ['id', 'email']});
  }
}
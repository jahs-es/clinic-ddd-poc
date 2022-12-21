import { EntitySchema } from 'typeorm';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { TypeOrmRepository } from '../../../../Shared/infrastructure/persistence/typeorm/TypeOrmRepository';
import { CustomerId } from '../../../Shared/domain/Customers/CustomerId';
import { Customer } from '../../domain/Customer';
import { CustomerRepository } from '../../domain/CustomerRepository';
import { CustomerEntity } from './typeorm/CustomerEntity';

export class TypeOrmCustomerRepository extends TypeOrmRepository<Customer> implements CustomerRepository {
  public save(customer: Customer): Promise<void> {
    return this.persist(customer);
  }

  public async search(id: CustomerId): Promise<Nullable<Customer>> {
    const repository = await this.repository();

    const customer = await repository.findOne({ id });

    return customer;
  }

  protected entitySchema(): EntitySchema<Customer> {
    return CustomerEntity;
  }

  public async searchAll(): Promise<Customer[]> {
    const repository = await this.repository();

    const customers = await repository.find();

    return customers;
  }
}

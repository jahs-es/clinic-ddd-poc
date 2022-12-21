import { Customer } from '../../../../../src/Contexts/Customer/Customers/domain/Customer';
import { CustomerName } from '../../../../../src/Contexts/Customer/Customers/domain/CustomerName';
import { CreateCustomerCommand } from '../../../../../src/Contexts/Customer/Customers/domain/CreateCustomerCommand';
import { CustomerId } from '../../../../../src/Contexts/Customer/Shared/domain/Customers/CustomerId';
import { CustomerIdMother } from '../../Shared/domain/Customers/CustomerIdMother';
import { CustomerNameMother } from './CustomerNameMother';

export class CustomerMother {
  static create(id: CustomerId, name: CustomerName): Customer {
    return new Customer(id, name);
  }

  static from(command: CreateCustomerCommand): Customer {
    return this.create(
      CustomerIdMother.create(command.id),
      CustomerNameMother.create(command.name)
    );
  }

  static random(): Customer {
    return this.create(CustomerIdMother.random(), CustomerNameMother.random());
  }
}

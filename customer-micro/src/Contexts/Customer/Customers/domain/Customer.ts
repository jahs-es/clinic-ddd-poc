import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {CustomerId} from '../../Shared/domain/Customers/CustomerId';
import {CustomerCreatedDomainEvent} from './CustomerCreatedDomainEvent';
import {CustomerName} from './CustomerName';

export class Customer extends AggregateRoot {
  readonly id: CustomerId;
  readonly name: CustomerName;

  constructor(id: CustomerId, name: CustomerName) {
    super();
    this.id = id;
    this.name = name;
  }

  static create(id: CustomerId, name: CustomerName): Customer {
    const customer = new Customer(id, name);

    customer.record(
      new CustomerCreatedDomainEvent({
        aggregateId: customer.id.value,
        name: customer.name.value
      })
    );

    return customer;
  }
  static fromPrimitives(plainData: { id: string; name: string; duration: string }): Customer {
    return new Customer(
      new CustomerId(plainData.id),
      new CustomerName(plainData.name)
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value
    };
  }
}

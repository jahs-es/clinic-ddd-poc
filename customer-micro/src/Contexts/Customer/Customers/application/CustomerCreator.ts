import {EventBus} from '../../../Shared/domain/EventBus';
import {CustomerId} from '../../Shared/domain/Customers/CustomerId';
import {Customer} from '../domain/Customer';
import {CustomerName} from '../domain/CustomerName';
import {CustomerRepository} from '../domain/CustomerRepository';

export class CustomerCreator {
  constructor(private repository: CustomerRepository, private eventBus: EventBus) {}

  async run(params: { id: CustomerId; name: CustomerName }): Promise<void> {
    const customer = Customer.create(params.id, params.name);
    await this.repository.save(customer);
    await this.eventBus.publish(customer.pullDomainEvents());
  }
}

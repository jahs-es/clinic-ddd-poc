import { CustomerRepository } from '../../domain/CustomerRepository';
import { CustomersResponse } from './CustomersResponse';

export class CustomerFinder {
  constructor(private customersRepository: CustomerRepository) {}

  async run() {
    const customers = await this.customersRepository.searchAll();

    return new CustomersResponse(customers);
  }
}

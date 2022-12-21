import { Customer } from '../../domain/Customer';

interface CustomerResponse {
  id: string;
  name: string;
  duration: string;
}

export class CustomersResponse {
  public readonly customers: Array<CustomerResponse>;

  constructor(customers: Array<Customer>) {
    this.customers = customers.map(customer => customer.toPrimitives());
  }
}

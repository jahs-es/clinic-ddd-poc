import { CustomerName } from '../../../../../src/Contexts/Customer/Customers/domain/CustomerName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class CustomerNameMother {
  static create(value: string): CustomerName {
    return new CustomerName(value);
  }

  static random(): CustomerName {
    return this.create(WordMother.random({ maxLength: 20 }));
  }

  static invalidName(): string {
    return "a".repeat(40);
  }
}

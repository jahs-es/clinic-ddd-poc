import { CustomerId } from '../../../../../../src/Contexts/Customer/Shared/domain/Customers/CustomerId';
import { UuidMother } from '../../../../Shared/domain/UuidMother';

export class CustomerIdMother {
  static create(value: string): CustomerId {
    return new CustomerId(value);
  }
  static random(): CustomerId {
    return this.create(UuidMother.random());
  }
}

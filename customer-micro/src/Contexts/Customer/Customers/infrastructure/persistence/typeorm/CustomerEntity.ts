import {EntitySchema} from 'typeorm';
import {ValueObjectTransformer} from '../../../../../Shared/infrastructure/persistence/typeorm/ValueObjectTransformer';
import {CustomerId} from '../../../../Shared/domain/Customers/CustomerId';
import {Customer} from '../../../domain/Customer';
import {CustomerName} from '../../../domain/CustomerName';

export const CustomerEntity = new EntitySchema<Customer>({
  name: 'Customer',
  tableName: 'Customers',
  target: Customer,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: ValueObjectTransformer(CustomerId)
    },
    name: {
      type: String,
      transformer: ValueObjectTransformer(CustomerName)
    }
  }
});

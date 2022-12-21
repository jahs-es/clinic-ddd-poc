import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { CustomerId } from '../../../Shared/domain/Customers/CustomerId';
import { Customer } from '../../domain/Customer';
import { CustomerRepository } from '../../domain/CustomerRepository';

interface CustomerDocument {
  _id: string;
  name: string;
  duration: string;
}

export class MongoCustomerRepository extends MongoRepository<Customer> implements CustomerRepository {
  public save(customer: Customer): Promise<void> {
    return this.persist(customer.id.value, customer);
  }

  public async search(id: CustomerId): Promise<Nullable<Customer>> {
    const collection = await this.collection();
    const document = await collection.findOne<CustomerDocument>({ _id: id.value });

    return document ? Customer.fromPrimitives({ name: document.name, duration: document.duration, id: id.value }) : null;
  }

  protected collectionName(): string {
    return 'customers';
  }

  public async searchAll(): Promise<Customer[]> {
    const collection = await this.collection();
    const documents = await collection.find<CustomerDocument>({}, {}).toArray();

    return documents.map(document =>
      Customer.fromPrimitives({ name: document.name, duration: document.duration, id: document._id })
    );
  }
}

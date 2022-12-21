import container from '../../../../../../src/apps/customer/backend/dependency-injection';
import { CustomerRepository } from '../../../../../../src/Contexts/Customer/Customers/domain/CustomerRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { CustomerMother } from '../../domain/CustomerMother';

const repository: CustomerRepository = container.get('Customer.Customers.domain.CustomerRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Customer.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('CustomerRepository', () => {
  describe('#save', () => {
    it('should save a course', async () => {
      const course = CustomerMother.random();

      await repository.save(course);
    });
  });
});

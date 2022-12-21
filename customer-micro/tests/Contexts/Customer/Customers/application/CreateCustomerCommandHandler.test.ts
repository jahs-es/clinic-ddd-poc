import { CustomerCreator } from '../../../../../src/Contexts/Customer/Customers/application/CustomerCreator';
import { CustomerMother } from '../domain/CustomerMother';
import { CustomerNameLengthExceeded } from '../../../../../src/Contexts/Customer/Customers/domain/CustomerNameLengthExceeded';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import EventBusMock from '../../Shared/domain/EventBusMock';
import { CustomerCreatedDomainEventMother } from '../domain/CustomerCreatedDomainEventMother';
import { CreateCustomerCommandHandler } from '../../../../../src/Contexts/Customer/Customers/application/CreateCustomerCommandHandler';
import { CreateCustomerCommandMother } from './CreateCustomerCommandMother';

let repository: CourseRepositoryMock;
let creator: CustomerCreator;
let eventBus: EventBusMock;
let handler: CreateCustomerCommandHandler;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  eventBus = new EventBusMock();
  creator = new CustomerCreator(repository, eventBus);
  handler = new CreateCustomerCommandHandler(creator);
});

describe('CreateCourseCommandHandler', () => {
  it('should create a valid course', async () => {
    const command = CreateCustomerCommandMother.random();
    const course = CustomerMother.from(command);
    const domainEvent = CustomerCreatedDomainEventMother.fromCourse(course);

    await handler.handle(command);

    repository.assertSaveHaveBeenCalledWith(course);
    eventBus.assertLastPublishedEventIs(domainEvent);
  });

  it('should throw error if course name length is exceeded', async () => {
    expect(() => {
      const command = CreateCustomerCommandMother.invalid();

      const course = CustomerMother.from(command);

      handler.handle(command);;

      repository.assertSaveHaveBeenCalledWith(course);
    }).toThrow(CustomerNameLengthExceeded);
  });
});

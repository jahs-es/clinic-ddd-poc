import { CustomerCreatedDomainEvent } from '../../../../../src/Contexts/Customer/Customers/domain/CustomerCreatedDomainEvent';
import { Customer } from '../../../../../src/Contexts/Customer/Customers/domain/Customer';

export class CustomerCreatedDomainEventMother {
  static create({
    aggregateId,
    eventId,
    name,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    name: string;
    occurredOn?: Date;
  }): CustomerCreatedDomainEvent {
    return new CustomerCreatedDomainEvent({
      aggregateId,
      eventId,
      name,
      occurredOn
    });
  }

  static fromCourse(course: Customer): CustomerCreatedDomainEvent {
    return new CustomerCreatedDomainEvent({
      aggregateId: course.id.value,
      name: course.name.value
    });
  }
}

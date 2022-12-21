import { DomainEvent } from '../../../Shared/domain/DomainEvent';

type CreateCustomerDomainEventAttributes = {
  readonly name: string;
};

export class CustomerCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'customer.created';

  readonly name: string;

  constructor({
    aggregateId,
    name,
    eventId,
    occurredOn
  }: {
    aggregateId: string;
    eventId?: string;
    name: string;
    occurredOn?: Date;
  }) {
    super({ eventName: CustomerCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn });
    this.name = name;
  }

  toPrimitives(): CreateCustomerDomainEventAttributes {
    const { name } = this;
    return {
      name
    };
  }

  static fromPrimitives(params: {
    aggregateId: string;
    attributes: CreateCustomerDomainEventAttributes;
    eventId: string;
    occurredOn: Date;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new CustomerCreatedDomainEvent({
      aggregateId,
      name: attributes.name,
      eventId,
      occurredOn
    });
  }
}

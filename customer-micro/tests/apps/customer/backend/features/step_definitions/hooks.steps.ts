import { AfterAll, BeforeAll } from 'cucumber';
import { ConfigureRabbitMQCommand } from '../../../../../../src/apps/customer/backend/command/ConfigureRabbitMQCommand';
import container from '../../../../../../src/apps/customer/backend/dependency-injection';
import { CustomerBackendApp } from '../../../../../../src/apps/customer/backend/CustomerBackendApp';
import { EventBus } from '../../../../../../src/Contexts/Shared/domain/EventBus';
import { EnvironmentArranger } from '../../../../../Contexts/Shared/infrastructure/arranger/EnvironmentArranger';

let application: CustomerBackendApp;
let environmentArranger: EnvironmentArranger;
let eventBus: EventBus;

BeforeAll(async () => {
  await ConfigureRabbitMQCommand.run();

  environmentArranger = await container.get<Promise<EnvironmentArranger>>('Customer.EnvironmentArranger');
  eventBus = container.get<EventBus>('Customer.Shared.domain.EventBus');
  await environmentArranger.arrange();

  application = new CustomerBackendApp();
  await application.start();
});

AfterAll(async () => {
  await environmentArranger.close();

  await application.stop();
});

export { application, environmentArranger, eventBus };

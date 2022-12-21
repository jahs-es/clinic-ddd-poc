import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { CustomerCreator } from './CustomerCreator';
import { Command } from '../../../../Shared/domain/Command';
import { CustomerId } from '../../../Shared/domain/Customers/CustomerId';
import { CustomerName } from '../../domain/CustomerName';
import { CreateCustomerCommand } from '../../domain/CreateCustomerCommand';

export class CreateCustomerCommandHandler implements CommandHandler<CreateCustomerCommand> {
  constructor(private customerCreator: CustomerCreator) {}

  subscribedTo(): Command {
    return CreateCustomerCommand;
  }

  async handle(command: CreateCustomerCommand): Promise<void> {
    const id = new CustomerId(command.id);
    const name = new CustomerName(command.name);
    await this.customerCreator.run({ id, name });
  }
}

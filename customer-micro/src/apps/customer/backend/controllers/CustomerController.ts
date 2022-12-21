import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CreateCustomerCommand } from '../../../../Contexts/Customer/Customers/domain/CreateCustomerCommand';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';
import { Controller } from './Controller';

type CustomerPutRequest = Request & {
  body: {
    id: string;
    name: string;
    duration: string;
  };
};
export class CustomerController implements Controller {
  constructor(private commandBus: CommandBus) {}

  async run(req: CustomerPutRequest, res: Response) {
    try {
      const { id, name } = req.body;
      const createCustomerCommand = new CreateCustomerCommand({ id, name });
      await this.commandBus.dispatch(createCustomerCommand);

      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}

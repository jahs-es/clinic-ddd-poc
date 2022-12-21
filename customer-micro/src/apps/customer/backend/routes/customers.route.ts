import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString()
  ];

  const customerController = container.get('Apps.customer.controllers.CustomerController');
  router.put('/customers/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    customerController.run(req, res)
  );
};

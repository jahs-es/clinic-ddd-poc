import { Query } from '../../../../Shared/domain/Query';
import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { CustomersResponse } from './CustomersResponse';
import { CustomerFinder } from './CustomerFinder';
import { SearchAllCustomersQuery } from './SearchAllCustomersQuery';

export class SearchAllCustomersQueryHandler implements QueryHandler<SearchAllCustomersQuery, CustomersResponse> {
  constructor(private customersFinder: CustomerFinder) {}

  subscribedTo(): Query {
    return SearchAllCustomersQuery;
  }

  async handle(_query: SearchAllCustomersQuery): Promise<CustomersResponse> {
    return this.customersFinder.run();
  }
}

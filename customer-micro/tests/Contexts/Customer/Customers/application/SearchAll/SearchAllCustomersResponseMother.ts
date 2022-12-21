import { CustomersResponse } from "../../../../../../src/Contexts/Customer/Customers/application/SearchAll/CustomersResponse";
import { Customer } from "../../../../../../src/Contexts/Customer/Customers/domain/Customer";

export class SearchAllCustomersResponseMother {
  static create(courses: Array<Customer>) {
    return new CustomersResponse(courses);
  }
}

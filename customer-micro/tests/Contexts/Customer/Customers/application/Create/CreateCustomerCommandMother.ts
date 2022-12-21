import { CustomerName } from "../../../../../../src/Contexts/Customer/Customers/domain/CustomerName";
import { CreateCustomerCommand } from "../../../../../../src/Contexts/Customer/Customers/domain/CreateCustomerCommand";
import { CustomerId } from "../../../../../../src/Contexts/Customer/Shared/domain/Customers/CustomerId";
import { CustomerIdMother } from "../../../Shared/domain/Customers/CustomerIdMother";
import { CustomerNameMother } from "../../domain/CustomerNameMother";

export class CreateCustomerCommandMother {
  static create(id: CustomerId, name: CustomerName, ): CreateCustomerCommand {
    return { id: id.value, name: name.value };
  }

  static random(): CreateCustomerCommand {
    return this.create(CustomerIdMother.random(), CustomerNameMother.random());
  }

  static invalid(): CreateCustomerCommand {
    return {
      id: CustomerIdMother.random().value,
      name: CustomerNameMother.invalidName()
    };
  }
}

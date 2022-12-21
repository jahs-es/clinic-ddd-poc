import { CustomerFinder } from "../../../../../../src/Contexts/Customer/Customers/application/SearchAll/CustomerFinder";
import { SearchAllCustomersQuery } from "../../../../../../src/Contexts/Customer/Customers/application/SearchAll/SearchAllCustomersQuery";
import { SearchAllCustomersQueryHandler } from "../../../../../../src/Contexts/Customer/Customers/application/SearchAll/SearchAllCustomersQueryHandler";
import { CustomerMother } from "../../domain/CustomerMother";
import { CourseRepositoryMock } from "../../__mocks__/CourseRepositoryMock";
import { SearchAllCustomersResponseMother } from "./SearchAllCustomersResponseMother";

describe('SearchAllCourses QueryHandler', () => {
  let repository: CourseRepositoryMock;

  beforeEach(() => {
    repository = new CourseRepositoryMock();
  });

  it('should find an existing courses', async () => {
    const courses = [CustomerMother.random(), CustomerMother.random(), CustomerMother.random()];
    repository.returnOnSearchAll(courses);

    const handler = new SearchAllCustomersQueryHandler(new CustomerFinder(repository));

    const query = new SearchAllCustomersQuery();
    const response = await handler.handle(query);

    repository.assertSearchAll();

    const expected = SearchAllCustomersResponseMother.create(courses);
    expect(expected).toEqual(response);
  });
});

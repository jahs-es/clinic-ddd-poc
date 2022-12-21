import { Customer } from '../../../../../src/Contexts/Customer/Customers/domain/Customer';
import { CustomerRepository } from '../../../../../src/Contexts/Customer/Customers/domain/CustomerRepository';

export class CourseRepositoryMock implements CustomerRepository {
  private saveMock: jest.Mock;
  private searchAllMock: jest.Mock;
  private courses: Array<Customer> = [];

  constructor() {
    this.saveMock = jest.fn();
    this.searchAllMock = jest.fn();
  }

  async save(course: Customer): Promise<void> {
    this.saveMock(course);
  }

  assertSaveHaveBeenCalledWith(expected: Customer): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }

  returnOnSearchAll(courses: Array<Customer>) {
    this.courses = courses;
  }

  assertSearchAll() {
    expect(this.searchAllMock).toHaveBeenCalled();
  }

  async searchAll(): Promise<Customer[]> {
    this.searchAllMock();
    return this.courses;
  }

}

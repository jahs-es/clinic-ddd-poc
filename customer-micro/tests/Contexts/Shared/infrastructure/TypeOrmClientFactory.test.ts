import { DataSource } from 'typeorm';
import { TypeOrmClientFactory } from '../../../../src/Contexts/Shared/infrastructure/persistence/typeorm/TypeOrmClientFactory';

describe.skip('TypeOrmClientFactory', () => {
  const factory = TypeOrmClientFactory;
  let client: DataSource;

  beforeEach(async () => {
    client = await factory.createClient('test', { host:"localhost", port: 5432, username: "codely", password:"codely",database: 'customer-backend-dev' });
  });

  afterEach(async () => {
    await client.destroy();
  });

  it('creates a new client with the connection already established', async () => {
    expect(client).toBeInstanceOf(DataSource);
    expect(client.isInitialized).toBe(false);
  });

  it('creates a new client if it does not exist a client with the given name', async () => {
    const newClient = await factory.createClient('test2', { host:"localhost", port: 5432, username: "codely", password:"codely",database: 'customer-backend-dev' });

    expect(newClient).not.toBe(client);
    expect(newClient.isInitialized).toBeTruthy();

    await newClient.destroy();
  });

  it('returns a client if it already exists', async () => {
    const newClient = await factory.createClient('test', { host:"localhost", port: 5432, username: "codely", password:"codely",database: 'customer-backend-dev' });

    expect(newClient).toBe(client);
    expect(newClient.isInitialized).toBeTruthy();
  });
});

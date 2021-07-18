import supertest from 'supertest';
import { SetupServer } from '@src/server';
import { StatusCodes } from 'http-status-codes';

const server = new SetupServer();
server.initialize();
const app = server.getApplication();

describe('service message', () => {
  it('should return a message', async () => {
    const response = await supertest(app).get('/message');
    expect(response.status).toEqual(StatusCodes.OK);
  });
});

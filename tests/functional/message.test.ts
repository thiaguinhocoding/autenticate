import supertest from 'supertest';
import { SetupServer } from '@src/server';

const server = new SetupServer();
server.initialize();
const app = server.getApplication();

describe('service message', () => {
  it('should return a message', async () => {
    const response = await supertest(app).get('/message');
    expect(response.status).toEqual(200);
  });
});

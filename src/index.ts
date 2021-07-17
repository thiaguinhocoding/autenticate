import 'dotenv/config';
//import config from 'confif';
import { SetupServer } from './server';

async function main() {
  const server = new SetupServer();
  server.initialize();
  server.start();
}

main();

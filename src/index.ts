import 'dotenv/config';
import config from 'config';
import { SetupServer } from './server';

const serverPort: number = config.get('App.serverPort');

async function main() {
  const server = new SetupServer(serverPort);
  server.initialize();
  server.start();
}

main();

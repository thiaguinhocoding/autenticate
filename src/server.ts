import { Server } from '@overnightjs/core';
import { Application } from 'express';
import { MessageController } from './controllers/message-controller';

export class SetupServer extends Server {
  constructor(private serverPort = 3333) {
    super();
  }

  public getApplication(): Application {
    return this.app;
  }

  public initialize(): void {
    this.configureControllers();
  }

  private configureControllers(): void {
    const messageController = new MessageController();
    this.addControllers([messageController]);
  }

  public start(): void {
    this.app.listen(this.serverPort, () => {
      console.log(`listening on *:${this.serverPort}`);
    });
  }
}

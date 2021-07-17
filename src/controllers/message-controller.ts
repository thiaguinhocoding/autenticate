import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

@Controller('message')
export class MessageController {
  @Get('')
  public async getMessage(_: Request, response: Response): Promise<void> {
    response.status(StatusCodes.OK).json({ message: 'Hello World!' });
  }
}

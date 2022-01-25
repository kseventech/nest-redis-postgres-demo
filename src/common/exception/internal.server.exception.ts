

import { ArgumentsHost, Catch, HttpException, HttpServer, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';
import dotenv from 'dotenv';
import { Request } from 'express';

dotenv.config();

@Catch()
export class InternalServerExcetpion extends BaseExceptionFilter {

    public constructor(
        public httpAdapter : HttpServer,
        @InjectSentry() private readonly client: SentryService
    ) {
        super(httpAdapter);
    }

    override async catch(exception: NodeJS.ErrnoException, host: ArgumentsHost) {
        const request = host.switchToHttp().getRequest<Request>();    
        const local = request.headers.host.includes('localhost');
        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    
        if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            this.client.instance().captureException(exception);
        }
        super.catch(exception, host);
      }
}
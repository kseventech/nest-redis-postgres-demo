

import { ArgumentsHost, Catch, HttpException, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import dotenv from 'dotenv';
import { Request } from 'express';

dotenv.config();

@Catch()
export class InternalServerExcetpion extends BaseExceptionFilter {

    override async catch(exception: NodeJS.ErrnoException, host: ArgumentsHost) {
        
        const request = host.switchToHttp().getRequest<Request>();
        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const local = request.headers.host.includes('localhost');

        if(status === HttpStatus.INTERNAL_SERVER_ERROR && !local) {
        
        }

        super.catch(exception, host);
    }
}
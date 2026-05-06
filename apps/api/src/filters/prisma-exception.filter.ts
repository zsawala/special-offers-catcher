import {
  Catch,
  ExceptionFilter,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { Prisma } from '../../../../libs/prisma/generated/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError) {
    switch (exception.code) {
      case 'P2002': {
        const field = (exception.meta?.target?.[0] as string) || 'field';
        throw new ConflictException(`${field} already exists`);
      }
      case 'P2025':
        throw new NotFoundException('Record not found');

      case 'P2003':
        throw new BadRequestException('Invalid reference');

      default:
        throw exception;
    }
  }
}

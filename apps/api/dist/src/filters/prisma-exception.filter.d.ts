import { ExceptionFilter } from '@nestjs/common';
import { Prisma } from '../generated/client';
export declare class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError): void;
}

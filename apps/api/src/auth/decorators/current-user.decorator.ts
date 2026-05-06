import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import type { UserEntity } from 'src/users/domain/user.entity';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request['user'] as UserEntity;
  },
);

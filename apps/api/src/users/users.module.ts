import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from '../../../../libs/users/src/users.service';
import { UserMapper } from '../../../../libs/users/src/domain/user.mapper';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UserMapper],
  exports: [UserMapper],
})
export class UsersModule {}

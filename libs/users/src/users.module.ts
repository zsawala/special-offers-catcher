import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserMapper } from './domain/user.mapper';

@Module({
  imports: [],
  providers: [UsersService, UserMapper],
  exports: [UsersService, UserMapper],
})
export class UsersModule {}

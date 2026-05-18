import { User } from 'src/generated/client';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMapper {
  toPersistance(user: UserEntity): User {
    return {
      ...user.props,
      name: user.props.name ?? null,
      refreshToken: user.props.refreshToken ?? null,
    };
  }

  toDomain(user: User): UserEntity {
    return new UserEntity({
      ...user,
      name: user.name || undefined,
      refreshToken: user.refreshToken || undefined,
    });
  }
}

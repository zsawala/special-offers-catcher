import { hashSync } from 'bcrypt';
import { CreateUserProps, UserProps } from './user.types';
import { randomUUID } from 'crypto';

export class UserEntity {
  constructor(readonly props: UserProps) {}

  static create(createData: CreateUserProps): UserEntity {
    const id = randomUUID();
    const passwordHash = hashSync(createData.password, 10);
    const { password: _password, ...userData } = createData;

    return new UserEntity({
      ...userData,
      id: id,
      passwordHash: passwordHash,
    });
  }
}

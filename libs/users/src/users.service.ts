import { Injectable } from '@nestjs/common';
import { User } from '../../prisma/generated/client';
import { PrismaService } from '../../prisma/src/prisma.service';
import { UserEntity } from './domain/user.entity';
import { UserMapper } from './domain/user.mapper';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: UserMapper,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();

    const mappedUsers = users.map((user) => this.mapper.toDomain(user));
    return mappedUsers;
  }

  async createUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const user = UserEntity.create({ name, email, password, role: 'USER' });

    const mappedUser = this.mapper.toPersistance(user) as User;

    return this.prisma.user.create({ data: mappedUser });
  }

  async updateUser({ name, id }: { name: string; id: string }): Promise<User> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }
}

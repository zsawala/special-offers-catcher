import { Injectable } from '@nestjs/common';
import { User } from '../generated/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser({
    name,
    email,
  }: {
    name: string;
    email: string;
  }): Promise<User> {
    return this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }

  async updateUser({ name, id }: { name: string; id: number }): Promise<User> {
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

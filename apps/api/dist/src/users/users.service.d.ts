import { User } from '../generated/client';
import { PrismaService } from '../prisma/prisma.service';
import { UserEntity } from './domain/user.entity';
import { UserMapper } from './domain/user.mapper';
export declare class UsersService {
    private readonly prisma;
    private readonly mapper;
    constructor(prisma: PrismaService, mapper: UserMapper);
    getUsers(): Promise<UserEntity[]>;
    createUser({ name, email, password, }: {
        name: string;
        email: string;
        password: string;
    }): Promise<User>;
    updateUser({ name, id }: {
        name: string;
        id: string;
    }): Promise<User>;
}

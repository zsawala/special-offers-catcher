import { UsersService } from './users.service';
import { User } from '../generated/client';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { UserEntity } from './domain/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<UserEntity[]>;
    create(createUserDto: CreateUserDto): Promise<CreateUserResponseDto>;
    update(updateUserDto: UpdateUserDto, id: string): Promise<User>;
}

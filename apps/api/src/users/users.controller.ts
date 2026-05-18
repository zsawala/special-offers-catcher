import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../../../../libs/users/src/users.service';
import { User } from '../../../../libs/prisma/generated/client';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { plainToInstance } from 'class-transformer';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { UserEntity } from '../../../../libs/users/src/domain/user.entity';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    const user = await this.usersService.createUser({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    });
    return plainToInstance(CreateUserResponseDto, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<User> {
    return this.usersService.updateUser({
      name: updateUserDto.name,
      id,
    });
  }
}

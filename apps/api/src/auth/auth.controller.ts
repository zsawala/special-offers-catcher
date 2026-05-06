import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';
import { CreateUserResponseDto } from 'src/users/dtos/create-user-response.dto';
import { plainToInstance } from 'class-transformer';
import { RefreshDto } from './dto/refresh.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import type { UserEntity } from 'src/users/domain/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refresh(
    @Body() refreshDto: RefreshDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authService.refresh(refreshDto.refreshToken);
  }

  @Delete('logout')
  @UseGuards(AuthGuard)
  async logout(@CurrentUser() user: UserEntity): Promise<void> {
    return this.authService.logout(user.props.id);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@CurrentUser() user: UserEntity): CreateUserResponseDto {
    return plainToInstance(CreateUserResponseDto, user.props);
  }
}

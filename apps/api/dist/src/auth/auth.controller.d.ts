import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserResponseDto } from "../users/dtos/create-user-response.dto";
import { RefreshDto } from './dto/refresh.dto';
import type { UserEntity } from "../users/domain/user.entity";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshDto: RefreshDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(user: UserEntity): Promise<void>;
    getProfile(user: UserEntity): CreateUserResponseDto;
}

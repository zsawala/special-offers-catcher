import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getProfile(userId: string): Promise<{
        email: string;
        id: string;
        name: string | null;
    }>;
    refresh(token: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<void>;
    private generateToken;
}

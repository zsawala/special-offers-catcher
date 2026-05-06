import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../../prisma/prisma.service";
import { UserMapper } from "../../users/domain/user.mapper";
export declare class AuthGuard implements CanActivate {
    private readonly jwtService;
    private readonly prismaService;
    private readonly userMapper;
    constructor(jwtService: JwtService, prismaService: PrismaService, userMapper: UserMapper);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}

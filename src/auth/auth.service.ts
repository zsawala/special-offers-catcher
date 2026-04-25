import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/generated/browser';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException('User with this email does not exist');
    }

    if (await bcrypt.compare(password, user.passwordHash)) {
      return this.generateToken(user);
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async getProfile(): Promise<{ email: string; id: number }> {
    const user = await this.prismaService.user.findUnique({
      where: { id: 1 },
      select: { email: true, id: true, name: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async refresh(
    token: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const tokenPayload = await this.jwtService.verifyAsync<{
      sub: number;
      email: string;
      user_id: number;
    }>(token);

    const user = await this.prismaService.user.findUnique({
      where: { id: tokenPayload.sub },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.refreshToken === null) {
      throw new UnauthorizedException('No refresh token found');
    }

    if (!(await bcrypt.compare(token, user.refreshToken))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateToken(user);
  }

  private async generateToken(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = { sub: user.id, user_id: user.id, email: user.email };

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
    });

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { refreshToken: hashedRefreshToken },
    });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async logout(): Promise<void> {
    await this.prismaService.user.update({
      where: { id: 1 },
      data: { refreshToken: null },
    });
  }
}

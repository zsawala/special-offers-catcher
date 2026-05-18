"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let AuthService = class AuthService {
    prismaService;
    jwtService;
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async login(email, password) {
        const user = await this.prismaService.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User with this email does not exist');
        }
        if (await bcrypt.compare(password, user.passwordHash)) {
            return this.generateToken(user);
        }
        else {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async getProfile(userId) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            select: { email: true, id: true, name: true },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async refresh(token) {
        const tokenPayload = await this.jwtService.verifyAsync(token);
        const user = await this.prismaService.user.findUnique({
            where: { id: tokenPayload.sub },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.refreshToken === null) {
            throw new common_1.UnauthorizedException('No refresh token found');
        }
        if (!(await bcrypt.compare(token, user.refreshToken))) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return this.generateToken(user);
    }
    async logout(userId) {
        await this.prismaService.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
    }
    async generateToken(user) {
        const payload = { sub: user.id, email: user.email };
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
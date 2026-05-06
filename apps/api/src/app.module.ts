import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from '../../../libs/config/database.config';
import serverConfig from './config/server.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import authConfig from '../../../libs/config/auth.config';
import { JwtModule } from '@nestjs/jwt';
import { OffersModule } from '../../../libs/offers/src/offers.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`],
      isGlobal: true,
      cache: true,
      load: [databaseConfig, serverConfig, authConfig],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().base64().required(),
      }),
    }),
    PrismaModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('auth.secret'),
        signOptions: { expiresIn: '60s' },
      }),
    }),
    UsersModule,
    AuthModule,
    OffersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

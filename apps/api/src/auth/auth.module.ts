import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UsersModule } from 'src/users/users.module';

@Global()
@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { UserMapper } from '../../users/src/domain/user.mapper';

@Module({
  providers: [OffersService, UserMapper],
})
export class OffersModule {}

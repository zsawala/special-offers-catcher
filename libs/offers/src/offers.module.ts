import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OfferMapper } from './domain/offer.mapper';

@Module({
  providers: [OffersService, OfferMapper],
})
export class OffersModule {}

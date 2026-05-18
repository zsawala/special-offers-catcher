import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { OfferEntity } from '../../../../libs/offers/src/offers/domain/offer.entity';
import { OffersService } from '../../../../libs/offers/src/offers/offers.service';

@Controller('offers')
@UseGuards(AuthGuard)
export class OffersController {
  constructor(private readonly offerService: OffersService) {}

  @Get()
  async getOffers(): Promise<OfferEntity[]> {
    return this.offerService.getOffers();
  }

  @Get('/:id')
  async getOffer(@Param('id', ParseUUIDPipe) id: string): Promise<OfferEntity> {
    return this.offerService.getOffer(id);
  }
}

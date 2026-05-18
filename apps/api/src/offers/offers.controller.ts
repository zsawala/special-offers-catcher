import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../src/auth/guards/auth.guard';
import { OfferEntity } from '@app/offers/domain/offer.entity';
import { OffersService } from '@app/offers/offers.service';

@Controller('offers')
@UseGuards(AuthGuard)
export class OffersController {
  constructor(private readonly offerService: OffersService) {}

  @Get()
  async getOffers(): Promise<OfferEntity[]> {
    return (await this.offerService.getOffers()) as OfferEntity[];
  }

  @Get('/:id')
  async getOffer(@Param('id', ParseUUIDPipe) id: string): Promise<OfferEntity> {
    return (await this.offerService.getOffer(id)) as OfferEntity;
  }
}

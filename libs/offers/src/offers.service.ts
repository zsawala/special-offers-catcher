import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { OfferMapper } from './domain/offer.mapper';
import { OfferEntity } from './domain/offer.entity';
import { Offer } from '@app/prisma/generated/client';

@Injectable()
export class OffersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: OfferMapper,
  ) {}

  async getOffers(): Promise<OfferEntity[]> {
    const offers = await this.prisma.offer.findMany();
    const offerEntities = offers.map((offer) =>
      this.mapper.toDomain(offer),
    ) as OfferEntity[];

    return offerEntities;
  }

  async getOffer(id: string): Promise<OfferEntity> {
    const offer = (await this.prisma.offer.findUnique({
      where: { id },
    })) as Offer;

    return this.mapper.toDomain(offer) as OfferEntity;
  }
}

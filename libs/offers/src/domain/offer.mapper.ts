import { Offer } from 'src/generated/client';
import { OfferEntity } from './offer.entity';

export class OfferMapper {
  toPersistance(offer: OfferEntity): Offer {
    return {
      ...offer.props,
      description: offer.props.description ?? null,
    };
  }

  toDomain(offer: Offer): OfferEntity {
    return new OfferEntity({
      ...offer,
      description: offer.description ?? undefined,
    });
  }
}

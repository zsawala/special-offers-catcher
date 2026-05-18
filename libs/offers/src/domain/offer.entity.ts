import { CreateOfferProps, OfferProps } from './offer.types';
import { randomUUID } from 'crypto';

export class OfferEntity {
  constructor(readonly props: OfferProps) {}

  static create(createData: CreateOfferProps): OfferEntity {
    const id = randomUUID();
    const { ...offerData } = createData;

    return new OfferEntity({
      ...offerData,
      id: id,
    });
  }
}

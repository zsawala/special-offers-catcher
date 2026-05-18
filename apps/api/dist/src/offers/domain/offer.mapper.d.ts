import { Offer } from "../../generated/client";
import { OfferEntity } from './offer.entity';
export declare class OfferMapper {
    toPersistance(offer: OfferEntity): Offer;
}

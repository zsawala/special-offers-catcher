import { CreateOfferProps, OfferProps } from './offer.types';
export declare class OfferEntity {
    readonly props: OfferProps;
    constructor(props: OfferProps);
    static create(createData: CreateOfferProps): OfferEntity;
}

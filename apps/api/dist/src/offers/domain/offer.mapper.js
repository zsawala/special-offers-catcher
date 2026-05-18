"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferMapper = void 0;
class OfferMapper {
    toPersistance(offer) {
        return {
            ...offer.props,
            description: offer.props.description ?? null,
        };
    }
}
exports.OfferMapper = OfferMapper;
//# sourceMappingURL=offer.mapper.js.map
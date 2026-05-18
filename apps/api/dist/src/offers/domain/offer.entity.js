"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferEntity = void 0;
const crypto_1 = require("crypto");
class OfferEntity {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(createData) {
        const id = (0, crypto_1.randomUUID)();
        const { ...offerData } = createData;
        return new OfferEntity({
            ...offerData,
            id: id,
        });
    }
}
exports.OfferEntity = OfferEntity;
//# sourceMappingURL=offer.entity.js.map
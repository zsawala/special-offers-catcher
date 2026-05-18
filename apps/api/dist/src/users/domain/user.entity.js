"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const bcrypt_1 = require("bcrypt");
const crypto_1 = require("crypto");
class UserEntity {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(createData) {
        const id = (0, crypto_1.randomUUID)();
        const passwordHash = (0, bcrypt_1.hashSync)(createData.password, 10);
        const { password: _password, ...userData } = createData;
        return new UserEntity({
            ...userData,
            id: id,
            passwordHash: passwordHash,
        });
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
let UserMapper = class UserMapper {
    toPersistance(user) {
        return {
            ...user.props,
            name: user.props.name ?? null,
            refreshToken: user.props.refreshToken ?? null,
        };
    }
    toDomain(user) {
        return new user_entity_1.UserEntity({
            ...user,
            name: user.name || undefined,
            refreshToken: user.refreshToken || undefined,
        });
    }
};
exports.UserMapper = UserMapper;
exports.UserMapper = UserMapper = __decorate([
    (0, common_1.Injectable)()
], UserMapper);
//# sourceMappingURL=user.mapper.js.map
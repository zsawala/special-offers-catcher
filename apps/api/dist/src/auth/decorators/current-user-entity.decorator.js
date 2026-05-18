"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserEntity = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUserEntity = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request['user'];
    const mapper = ctx.switchToHttp().getRequest().userMapper;
    return mapper.toDomain(user);
});
//# sourceMappingURL=current-user-entity.decorator.js.map
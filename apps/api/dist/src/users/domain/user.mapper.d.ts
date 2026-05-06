import { User } from "../../generated/client";
import { UserEntity } from './user.entity';
export declare class UserMapper {
    toPersistance(user: UserEntity): User;
    toDomain(user: User): UserEntity;
}

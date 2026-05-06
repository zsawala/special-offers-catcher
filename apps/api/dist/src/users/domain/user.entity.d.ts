import { CreateUserProps, UserProps } from './user.types';
export declare class UserEntity {
    readonly props: UserProps;
    constructor(props: UserProps);
    static create(createData: CreateUserProps): UserEntity;
}

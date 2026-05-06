import { Role } from "../../generated/client";
export interface UserProps {
    id: string;
    email: string;
    name?: string;
    role: Role;
    passwordHash: string;
    refreshToken?: string;
}
export interface CreateUserProps {
    email: string;
    name?: string;
    password: string;
    role: Role;
}

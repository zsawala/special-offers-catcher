import { Exclude } from 'class-transformer';

export class CreateUserResponseDto {
  id!: number;
  email!: string;
  name!: string;

  @Exclude()
  passwordHash!: string;

  @Exclude()
  refreshToken?: string;
}

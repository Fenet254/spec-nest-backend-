import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  username: string; // ✅ add this

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
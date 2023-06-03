import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  age: number;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  height_cm: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  weight_kg: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  calorie_goal: number;
}

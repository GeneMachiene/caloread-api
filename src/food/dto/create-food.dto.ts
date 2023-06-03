import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateFoodDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  user_id: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  calories: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  carbs: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  fat: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  protein: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  grams: number;

  @ApiProperty()
  @IsString()
  name: string;
}

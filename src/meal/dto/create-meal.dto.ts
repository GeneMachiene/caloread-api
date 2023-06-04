import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateMealDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  food_id: number;

  @ApiProperty({
    description: 'Date should be in the format yyyy-MM-dd',
  })
  @Type(() => Date)
  @IsDate()
  date_taken: Date;

  @ApiProperty({
    description: 'Either BREAKFAST, LUNCH, or DINNER',
    enum: ['BREAKFAST', 'LUNCH', 'DINNER'],
  })
  @IsString()
  type: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  servings: number;
}

import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMealDto } from './create-meal.dto';

export class UpdateMealDto extends OmitType(CreateMealDto, [
  'user_id',
  'date_taken',
  'type',
] as const) {}

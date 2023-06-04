import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateMealDto } from './create-meal.dto';

export class UpdateMealDto extends OmitType(CreateMealDto, [
  'username',
  'date_taken',
  'type',
] as const) {}

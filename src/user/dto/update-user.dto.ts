import { OmitType, PartialType } from '@nestjs/swagger';
import { RegisterDto } from 'src/auth/dto/register.dto';

export class UpdateUserDto extends OmitType(RegisterDto, [
  'username',
] as const) {}

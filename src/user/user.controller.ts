import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User Controls')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(+id, dto);
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.userService.findUser(+id);
  }
}

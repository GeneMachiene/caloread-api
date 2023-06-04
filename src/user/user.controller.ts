import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User Controls')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Put(':username')
  updateUser(@Param('username') username: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(username, dto);
  }

  @Get(':username')
  findUser(@Param('username') username: string) {
    return this.userService.findUser(username);
  }
}

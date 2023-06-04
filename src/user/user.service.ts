import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async updateUser(username: string, dto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        username,
      },
      data: { ...dto },
    });
  }

  async findUser(username: string) {
    return await this.prismaService.user.findUnique({
      where: {
        username,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async updateUser(id: number, dto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: { ...dto },
    });
  }

  async findUser(id: number) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }
}

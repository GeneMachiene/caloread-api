import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Food } from '@prisma/client';

@Injectable()
export class FoodService {
  constructor(private prismaService: PrismaService) {}
  async create(createFoodDto: CreateFoodDto) {
    const { user_id, ...foodData } = createFoodDto;
    return await this.prismaService.food.create({
      data: { User: { connect: { id: user_id } }, ...foodData },
    });
  }

  async findAll(user_id: number) {
    return await this.prismaService.food.findMany({
      where: {
        user_id,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.food.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    return await this.prismaService.food.update({
      where: {
        id,
      },
      data: { ...updateFoodDto },
    });
  }

  async remove(id: number) {
    return await this.prismaService.food.delete({
      where: {
        id,
      },
    });
  }
}

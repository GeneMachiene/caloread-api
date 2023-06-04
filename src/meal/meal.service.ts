import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealService {
  constructor(private prismaService: PrismaService) {}
  async create(createMealDto: CreateMealDto) {
    return await this.prismaService.meal.create({
      data: { ...createMealDto },
    });
  }

  async findAll(username: string, date: string) {
    const currDate = new Date(date).toJSON().slice(0, 10);
    const startDate = new Date(`${currDate}T00:00:00.000Z`);
    const endDate = new Date(`${currDate}T23:59:59.000Z`);

    return await this.prismaService.meal.findMany({
      where: {
        username,
        date_taken: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.meal.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateMealDto: UpdateMealDto) {
    return await this.prismaService.meal.update({
      where: {
        id,
      },
      data: { ...updateMealDto },
    });
  }

  async remove(id: number) {
    return await this.prismaService.meal.delete({
      where: {
        id,
      },
    });
  }
}

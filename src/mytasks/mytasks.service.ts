import { Injectable } from '@nestjs/common';
import { DueDate, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class MytasksService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createMytaskDto: Prisma.TaskCreateInput) {
    return this.databaseService.task.create({
      data: createMytaskDto,
    });
  }

  async findAll(dueDate?: DueDate) {
    if (dueDate)
      return this.databaseService.task.findMany({
        where: {
          dueDate,
        },
      });
    return this.databaseService.task.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.task.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateMytaskDto: Prisma.TaskUpdateInput) {
    return this.databaseService.task.update({
      where: {
        id,
      },
      data: updateMytaskDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.task.delete({
      where: {
        id,
      },
    });
  }
}

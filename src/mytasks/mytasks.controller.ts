import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MytasksService } from './mytasks.service';
import { Prisma } from '@prisma/client';
import { DueDate } from 'src/types/types';
@Controller('mytasks')
export class MytasksController {
  constructor(private readonly mytasksService: MytasksService) {}

  @Post()
  create(@Body() createMytaskDto: Prisma.TaskCreateInput) {
    return this.mytasksService.create(createMytaskDto);
  }

  @Get()
  findAll(@Query('dueDate') dueDate?: DueDate) {
    return this.mytasksService.findAll(dueDate);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mytasksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMytaskDto: Prisma.TaskUpdateInput,
  ) {
    return this.mytasksService.update(+id, updateMytaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mytasksService.remove(+id);
  }
}

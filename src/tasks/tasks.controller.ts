import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/Create';
import { UpdateTaskDto } from './dto/Update';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';

@Controller('tasks') //this controller handles the route /tasks
export class TasksController {
  /**
   * GET /tasks
   * GET /tasks/:id
   * POST /tasks
   * PATCH /tasks/:id
   * DELETE /tasks/:id
   */
  constructor(private readonly tasksService: TasksService) {}

  @Get() // GET /tasks
  findAll(@Query('dueDate') dueDate?: 'today' | 'noDueDate') {
    return this.tasksService.findAll(dueDate);
  }

  @Get(':id') // GET /tasks/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post() // POST /tasks
  create(@Body(ValidationPipe) task: CreateTaskDto) {
    return this.tasksService.create(task);
  }

  @Patch(':id') // PATCH /tasks/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updatedTask: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, updatedTask);
  }

  @Delete(':id') // DELETE /tasks/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.delete(id);
  }
}

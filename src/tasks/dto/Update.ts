import { DueDate, TaskPriority, TaskStatus } from 'src/types/types';
import { CreateTaskDto } from './Create';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}

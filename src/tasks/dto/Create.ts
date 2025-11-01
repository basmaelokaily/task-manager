import {
  IsEnum,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsArray,
} from 'class-validator';
import { DueDate, TaskPriority, TaskStatus } from 'src/types/types';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;

  @IsEnum(DueDate)
  @IsOptional()
  dueDate?: DueDate;

  @IsString()
  @IsOptional()
  category?: string;

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsOptional()
  assignedTo?: string;

  @IsString()
  @IsNotEmpty()
  createdBy: string;

  @IsNumber()
  @IsOptional()
  estimatedMinutes?: number;

  @IsNumber()
  @IsOptional()
  actualMinutes?: number;

  @IsBoolean()
  @IsOptional()
  isRecurring?: boolean;

  @IsString()
  @IsOptional()
  recurrencePattern?: string;
}

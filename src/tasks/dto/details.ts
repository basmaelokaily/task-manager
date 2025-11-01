import { IsEnum } from 'class-validator';
import { DueDate, Subtask, TaskPriority, TaskStatus } from 'src/types/types';

export class Task {
  id: number;
  title: string;
  description?: string;
  @IsEnum(TaskStatus, { message: 'Invalid status' })
  status?: TaskStatus;
  @IsEnum(DueDate, { message: 'Invalid due date' })
  priority?: TaskPriority;
  @IsEnum(DueDate, { message: 'Invalid due date' })
  dueDate?: DueDate; // ISO string
  createdAt?: string;
  updatedAt?: string;
  completedAt?: string | null;
  category?: string;
  tags?: string[];
  assignedTo?: string; // User ID or name
  createdBy?: string;
  estimatedMinutes?: number;
  actualMinutes?: number | null;
  isRecurring?: boolean;
  recurrencePattern?: string | null; // e.g., "daily", "weekly", "monthly"
}

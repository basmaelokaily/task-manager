export enum TaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
  urgent = 'urgent',
}

export enum TaskStatus {
  todo = 'todo',
  in_progress = 'in_progress',
  completed = 'completed',
  cancelled = 'cancelled',
}

export enum DueDate {
  today = 'today',
  noDueDate = 'noDueDate',
}
export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

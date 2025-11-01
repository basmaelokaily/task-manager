import { Injectable } from '@nestjs/common';
import { Task } from './dto/details';
import { UpdateTaskDto } from './dto/Update';
import { CreateTaskDto } from './dto/Create';
import { DueDate, TaskPriority, TaskStatus } from 'src/types/types';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Project Proposal',
      description:
        'Draft and review the Q4 project proposal document with the team. Include budget estimates and timeline.',
      status: TaskStatus.in_progress,
      priority: TaskPriority.high,
      dueDate: DueDate.today,
      createdAt: '2024-02-10T09:30:00Z',
      updatedAt: '2024-02-12T14:20:00Z',
      completedAt: null,
      category: 'Work',
      tags: ['documentation', 'planning', 'team'],
      assignedTo: 'user-123',
      createdBy: 'user-456',
      estimatedMinutes: 180,
      actualMinutes: 90,

      isRecurring: false,
      recurrencePattern: null,
    },
    {
      id: 2,
      title: 'Grocery Shopping',
      description:
        'Weekly grocery run. Remember to buy ingredients for dinner party on Saturday.',
      status: TaskStatus.todo,
      priority: TaskPriority.medium,
      dueDate: DueDate.today,
      createdAt: '2024-02-13T08:15:00Z',
      updatedAt: '2024-02-13T08:15:00Z',
      completedAt: null,
      category: 'Personal',
      tags: ['shopping', 'food', 'weekly'],
      assignedTo: 'user-123',
      createdBy: 'user-123',
      estimatedMinutes: 45,
      actualMinutes: null,

      isRecurring: true,
      recurrencePattern: 'weekly',
    },
    {
      id: 3,
      title: 'Dentist Appointment',
      description:
        'Regular dental checkup at Dr. Smith office. Bring insurance card.',
      status: TaskStatus.completed,
      priority: TaskPriority.medium,
      dueDate: DueDate.today,
      createdAt: '2024-02-01T16:45:00Z',
      updatedAt: '2024-02-12T12:00:00Z',
      completedAt: '2024-02-12T11:45:00Z',
      category: 'Health',
      tags: ['appointment', 'health', 'medical'],
      assignedTo: 'user-123',
      createdBy: 'user-123',
      estimatedMinutes: 60,
      actualMinutes: 75,
      isRecurring: false,
      recurrencePattern: null,
    },
    {
      id: 4,
      title: 'Fix Login Bug',
      description:
        'Users reporting authentication issues on mobile devices. Investigate and deploy hotfix.',
      priority: TaskPriority.urgent,
      status: TaskStatus.in_progress,
      dueDate: DueDate.today,
      createdAt: '2024-02-13T14:30:00Z',
      updatedAt: '2024-02-13T16:45:00Z',
      completedAt: null,
      category: 'Work',
      tags: ['bug', 'mobile', 'authentication', 'hotfix'],
      assignedTo: 'user-789',
      createdBy: 'user-456',
      estimatedMinutes: 240,
      actualMinutes: 120,
      isRecurring: false,
      recurrencePattern: null,
    },
    {
      id: 5,
      title: 'Plan Vacation',
      description:
        'Research and book summer vacation. Compare flights and accommodations.',
      status: TaskStatus.todo,
      priority: TaskPriority.low,
      dueDate: DueDate.today,
      createdAt: '2024-02-10T20:15:00Z',
      updatedAt: '2024-02-11T11:30:00Z',
      completedAt: null,
      category: 'Personal',
      tags: ['travel', 'planning', 'fun'],
      assignedTo: 'user-123',
      createdBy: 'user-123',
      estimatedMinutes: 120,
      actualMinutes: null,
      isRecurring: false,
      recurrencePattern: null,
    },
    {
      id: 6,
      title: 'Team Meeting Preparation',
      description:
        'Prepare slides and talking points for quarterly team meeting.',
      status: TaskStatus.completed,
      priority: TaskPriority.high,
      dueDate: DueDate.today,
      createdAt: '2024-02-05T13:20:00Z',
      updatedAt: '2024-02-12T10:30:00Z',
      completedAt: '2024-02-11T17:45:00Z',
      category: 'Work',
      tags: ['meeting', 'presentation', 'team'],
      assignedTo: 'user-456',
      createdBy: 'user-456',
      estimatedMinutes: 90,
      actualMinutes: 110,
      isRecurring: false,
      recurrencePattern: null,
    },
  ];

  findAll(dueDate?: 'today' | 'noDueDate'): Task[] {
    if (dueDate) {
      const dueDateArray = this.tasks.filter(
        (task) => task.dueDate === dueDate,
      );
      if (dueDateArray.length === 0) {
        throw new NotFoundException(`No tasks found with dueDate: ${dueDate}`);
      }
      return dueDateArray;
    }
    return this.tasks;
  }

  findOne(id: number): Task | undefined {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  create(task: CreateTaskDto): Task {
    const userByHighestId = [...this.tasks].sort((a, b) => b.id - a.id);
    const newTask: Task = {
      id: userByHighestId[0].id + 1,
      ...task,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updatedTask: UpdateTaskDto): Task | undefined {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedTask = this.findOne(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return removedTask;
  }
}

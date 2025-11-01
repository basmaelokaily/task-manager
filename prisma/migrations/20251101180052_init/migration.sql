-- CreateEnum
CREATE TYPE "TaskPriority" AS ENUM ('low', 'medium', 'high', 'urgent');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('todo', 'in_progress', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "DueDate" AS ENUM ('today', 'noDueDate');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "TaskStatus" NOT NULL,
    "priority" "TaskPriority" NOT NULL,
    "dueDate" "DueDate",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "category" TEXT,
    "tags" TEXT[],
    "assignedTo" TEXT,
    "createdBy" TEXT,
    "estimatedMinutes" INTEGER,
    "actualMinutes" INTEGER,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "recurrencePattern" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

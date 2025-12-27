/*
  Warnings:

  - You are about to drop the column `is_completed` on the `work_interval` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "daily_goal" ALTER COLUMN "date" SET DATA TYPE TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "daily_progress" ALTER COLUMN "date" SET DATA TYPE TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "work_interval" DROP COLUMN "is_completed",
ADD COLUMN     "state" TEXT NOT NULL DEFAULT 'active',
ALTER COLUMN "start_time" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "end_time" SET DATA TYPE TIMESTAMPTZ;

/*
  Warnings:

  - You are about to drop the column `updated_at` on the `Log` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Log_create_at_idx";

-- DropIndex
DROP INDEX "Log_ip_address_idx";

-- AlterTable
ALTER TABLE "Log" DROP COLUMN "updated_at";

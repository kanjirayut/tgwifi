/*
  Warnings:

  - You are about to drop the column `ip_address` on the `Log` table. All the data in the column will be lost.
  - Added the required column `ipAddress` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "ip_address",
ADD COLUMN     "ipAddress" TEXT NOT NULL;

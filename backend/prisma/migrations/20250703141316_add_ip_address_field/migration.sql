/*
  Warnings:

  - You are about to drop the column `ipAddress` on the `Log` table. All the data in the column will be lost.
  - Added the required column `ip_address` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "ipAddress",
ADD COLUMN     "ip_address" TEXT NOT NULL;

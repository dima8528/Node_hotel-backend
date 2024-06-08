/*
  Warnings:

  - You are about to drop the column `description` on the `Room` table. All the data in the column will be lost.
  - Added the required column `roomName` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "description",
ADD COLUMN     "roomName" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

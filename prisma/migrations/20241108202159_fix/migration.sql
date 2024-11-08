/*
  Warnings:

  - You are about to drop the column `categoty` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `paymentmethod` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `category` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethod` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "categoty",
DROP COLUMN "paymentmethod",
ADD COLUMN     "category" "TransactionCategory" NOT NULL,
ADD COLUMN     "paymentMethod" "TransactionPaymentMethod" NOT NULL;

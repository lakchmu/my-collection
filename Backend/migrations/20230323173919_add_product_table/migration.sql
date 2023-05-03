-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('PIECE', 'GRAM');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unit" "Unit" NOT NULL,
    "amount" INTEGER NOT NULL,
    "limit" INTEGER NOT NULL,
    "files" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

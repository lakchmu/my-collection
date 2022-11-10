-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('KINDER', 'OTHER');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SIMPLE', 'DIFFICULT');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN_COLLECTION', 'IN_PROGRESS', 'IN_WISH_LIST', 'EMPTY');

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "brand" "Brand" NOT NULL DEFAULT 'KINDER',
    "type" "Type" NOT NULL DEFAULT 'DIFFICULT',
    "status" "Status" NOT NULL DEFAULT 'EMPTY',
    "showOnHome" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnCollections" (
    "userId" INTEGER NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersOnCollections_pkey" PRIMARY KEY ("userId","collectionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_name_key" ON "Collection"("name");

-- AddForeignKey
ALTER TABLE "UsersOnCollections" ADD CONSTRAINT "UsersOnCollections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnCollections" ADD CONSTRAINT "UsersOnCollections_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

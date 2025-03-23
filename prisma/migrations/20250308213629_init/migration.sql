/*
  Warnings:

  - You are about to drop the `JSONData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "JSONData";

-- CreateTable
CREATE TABLE "JsonData" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "JsonData_pkey" PRIMARY KEY ("id")
);

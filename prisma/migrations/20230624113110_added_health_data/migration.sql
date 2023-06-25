-- CreateEnum
CREATE TYPE "DatapointTypes" AS ENUM ('STEPS', 'DISTANCE', 'HEART_RATE', 'BLOOD_PRESSURE', 'SLEEP', 'WEIGHT', 'BODY_FAT');

-- CreateTable
CREATE TABLE "HealthData" (
    "id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HealthData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Datapoint" (
    "id" UUID NOT NULL,
    "type" "DatapointTypes" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "healthDataId" TEXT,

    CONSTRAINT "Datapoint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Datapoint_healthDataId_idx" ON "Datapoint"("healthDataId");

-- CreateTable
CREATE TABLE "UserForm" (
    "id" SERIAL NOT NULL,
    "carName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserForm_pkey" PRIMARY KEY ("id")
);

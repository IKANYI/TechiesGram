-- CreateTable
CREATE TABLE "users_data" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "users_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_data_email_key" ON "users_data"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_data_phoneNumber_key" ON "users_data"("phoneNumber");

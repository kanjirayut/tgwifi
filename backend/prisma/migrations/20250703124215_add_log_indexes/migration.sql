-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Log_ip_address_idx" ON "Log"("ip_address");

-- CreateIndex
CREATE INDEX "Log_create_at_idx" ON "Log"("create_at");

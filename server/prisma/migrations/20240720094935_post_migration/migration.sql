-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "postMedia" TEXT,
    "postText" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

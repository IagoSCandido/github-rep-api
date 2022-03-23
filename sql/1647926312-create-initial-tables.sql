CREATE TABLE "user" (
    id INTEGER NOT NULL UNIQUE,
	owner_login TEXT NOT NULL,
	avatar_url TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"description" TEXT,
	visibility INTEGER NOT NULL DEFAULT 1,
	default_branch TEXT NOT NULL,
	"size" INTEGER NOT NULL
);
CREATE TABLE "user" (
    id INTEGER NOT NULL UNIQUE,
	owner_login VARCHAR NOT NULL,
	avatar_url VARCHAR NOT NULL,
	"name" VARCHAR NOT NULL,
	"description" VARCHAR,
	visibility INTEGER NOT NULL DEFAULT 1,
	default_branch VARCHAR NOT NULL,
	"size" INTEGER NOT NULL
);
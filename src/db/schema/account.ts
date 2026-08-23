import * as t from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const account = pgTable("account", {
	id: t.text("id").primaryKey(),
	userId: t.text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	provider: t.text("provider").notNull(),
	providerAccountId: t.text("provider_account_id").notNull(),
	refresh_token: t.text("refresh_token"),
	access_token: t.text("access_token"),
	expires_at: t.integer("expires_at"),
	token_type: t.text("token_type"),
	scope: t.text("scope"),
});
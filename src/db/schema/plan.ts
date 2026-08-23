import * as t from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const plan = pgTable("plan", {
	id: t.text("id").primaryKey(),
	name: t.text("name").notNull(),
	description: t.text("description").notNull(),
	price: t.numeric("price").notNull(),
	currency: t.text("currency").notNull(),
	createdAt: t
		.timestamp("created_at", { precision: 6, withTimezone: true })
		.notNull(),
	updatedAt: t
		.timestamp("updated_at", { precision: 6, withTimezone: true })
		.notNull(),
});

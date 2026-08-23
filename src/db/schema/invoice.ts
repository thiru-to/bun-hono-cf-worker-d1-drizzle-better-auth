import * as t from "drizzle-orm/pg-core";
import { pgEnum, pgTable } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { subscription } from "./subscription";
import { plan } from "./plan";
import { account } from "./account";

export const invoiceStatus = pgEnum("invoice_status", [
	"pending",
	"paid",
	"failed",
	"cancelled",
]);

export const invoice = pgTable("invoice", {
	id: t.text("id").primaryKey(),
	userId: t
		.text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	accountId: t
		.text("account_id")
		.notNull()
		.references(() => account.id, { onDelete: "cascade" }),
	subscriptionId: t
		.text("subscription_id")
		.notNull()
		.references(() => subscription.id, { onDelete: "cascade" }),
	planId: t
		.text("plan_id")
		.notNull()
		.references(() => plan.id, { onDelete: "cascade" }),
	amount: t.numeric("amount").notNull(),
	currency: t.text("currency").notNull(),
	description: t.text("description").notNull(),
	createdAt: t
		.timestamp("created_at", { precision: 6, withTimezone: true })
		.notNull(),
	updatedAt: t
		.timestamp("updated_at", { precision: 6, withTimezone: true })
		.notNull(),
});

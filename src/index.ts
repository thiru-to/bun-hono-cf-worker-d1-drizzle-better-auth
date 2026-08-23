import { Hono } from 'hono'
import type { AuthType } from "@/lib/auth"
import authRouter from "@/routes/auth";
import accountRouter from "@/routes/account";
import invoiceRouter from "@/routes/invoice";
import planRouter from "@/routes/plan";
import subscriptionRouter from "@/routes/subscription";
import userRouter from "@/routes/user";

const app = new Hono<{ Variables: AuthType }>({
  strict: false,
});

const publicRoutes = [authRouter] as const;

const privateRoutes = [accountRouter, invoiceRouter, planRouter, subscriptionRouter, userRouter] as const;

publicRoutes.forEach((route) => {
  app.basePath("/api").route("/", route);
});
privateRoutes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

export default app;
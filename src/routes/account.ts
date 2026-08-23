import { Hono } from "hono";

const router = new Hono();

router.get("/account", async (c) => {
	return c.json({ message: "Account route" });
});

export default router;

import { Hono } from "hono";

const router = new Hono();

router.get("/subscription", async (c) => {
	return c.json({ message: "Subscription route" });
});

export default router;

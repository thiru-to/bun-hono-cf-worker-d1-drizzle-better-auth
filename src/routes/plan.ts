import { Hono } from "hono";

const router = new Hono();

router.get("/plan", async (c) => {
	return c.json({ message: "Plan route" });
});

export default router;

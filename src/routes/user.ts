import { Hono } from "hono";

const router = new Hono();

router.get("/user", async (c) => {
	return c.json({ message: "User route" });
});

export default router;

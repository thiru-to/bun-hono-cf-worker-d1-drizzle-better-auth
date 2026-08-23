import { Hono } from "hono";

const router = new Hono();

router.get("/invoice", async (c) => {
	return c.json({ message: "Invoice route" });
});

export default router;

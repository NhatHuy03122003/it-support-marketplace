import express from "express";

const router = express.Router();


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     responses:
 *       200:
 *         description: Login success
 */
router.post("/login", (req, res) => {
    res.json({ success: false, message: "Login endpoint not implemented yet" });
});



export default router;
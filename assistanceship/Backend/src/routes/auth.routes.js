import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { updateUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.put("/users/:id", updateUser);

export default router;

/* Actualmente esto es lo que tengo en auth.routes:
import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { updateUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.put("/users/:id", updateUser);

export default router;
*/
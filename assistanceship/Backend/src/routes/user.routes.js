import { Router } from 'express';
import { updateUser } from '@controllers/user.controller.js';

const router = Router();

router.patch('/users/:id', updateUser);

export default router;
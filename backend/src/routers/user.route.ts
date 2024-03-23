import { getUser, getUsers, seedUsers } from '@/controllers/user.controller';
import { Router } from 'express';
const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/seed', seedUsers);

export default router;

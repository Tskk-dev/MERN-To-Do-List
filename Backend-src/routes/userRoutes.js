import express from 'express';
import { registerUser, deleteUser, updateUser, getUsers } from '../controllers/userControllers.js';

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.delete('/:id', deleteUser);
router.get('/', getUsers);
router.patch('/:id', updateUser);

export default router;

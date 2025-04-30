// routes/userRoutes.js
import express from 'express';
import { createUser, getUsers,updateUser } from '../controllers/UserController.js';
import upload from '../middlewares/multer_middleware.js';
const router = express.Router();

// POST: Create a new user
router.post('/create',upload.single("image"), createUser);

// GET: Get all users
router.get('/', getUsers);

// UPDATE BY ID users

router.put('/:id', updateUser);

export default router;

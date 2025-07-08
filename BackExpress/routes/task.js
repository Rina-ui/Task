import express from 'express';
import { getTasks, addTask, updateTask, deleteTask } from '../controllers/task.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Routes for tasks
router.post('/', verifyToken, addTask); 
router.get('/', verifyToken, getTasks); 
router.put('/:id', verifyToken, updateTask); 
router.delete('/:id', verifyToken, deleteTask); 
import express from 'express';
import { getTasks, createTask, modifyTask, deleteTask } from '../controllers/task.js';
import { verifyToken } from '../middlewares/auths.js';

const router = express.Router();

// Routes for tasks
router.post('/', verifyToken, createTask); 
router.get('/', verifyToken, getTasks); 
router.put('/:id', verifyToken, modifyTask); 
router.delete('/:id', verifyToken, deleteTask); 

export default router;
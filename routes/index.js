import express from 'express';
import db from '../db/db.js';
import TodoController from '../todosControllers/todos.js';

const router = express.Router();


router.get('/api/v1/todos', TodoController.getAllTodos);

router.post('/api/v1/todo', TodoController.createTodo);

router.get('/api/v1/todos/:id', TodoController.getSingleTodo);

router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

router.put('/api/v1/todos/:id', TodoController.updateTodo);

export default router;
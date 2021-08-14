import { Router } from 'express';
import CheckedTodosController from './app/controller/CheckedTodosController';
import TodoController from './app/controller/TodosController';

const routes = Router();
const todoController = new TodoController();
const checkedTodosController = new CheckedTodosController();

routes.get('/', (req, res) => {
  res.json({ message: 'hello World' });
});

routes.get('/todos', todoController.index);
routes.post('/todos', todoController.create);

routes.get('/todos/checked', checkedTodosController.index);

export { routes };

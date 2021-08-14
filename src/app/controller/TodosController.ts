import { Request, Response } from 'express';
import TodoService from '../service/TodoService';

export default class TodoController {
  async index(req: Request, res: Response): Promise<Response> {
    const todoService = new TodoService();

    const todos = await todoService.getAllTodos();

    if (todos.length === 0) {
      return res
        .json({
          message: 'Não existem To-Dos cadastrados'
        })
        .status(204);
    }

    return res.status(200).json(todos);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const todo = req.body;

    const todoService = new TodoService();

    try {
      const createdTodo = todoService.createTodo(todo);
    } catch {
      return res.status(400);
    }

    console.log(createdTodo);

    return res.status(201).json(createdTodo);
  }
}

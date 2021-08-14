import { Request, Response } from 'express';
import TodoService from '../service/TodoService';

export default class CheckedTodoController {
  async index(req: Request, res: Response): Promise<Response> {
    const todoService = new TodoService();

    const todos = await todoService.getAllCheckedToDos();

    return res.status(200).json(todos);
  }
}

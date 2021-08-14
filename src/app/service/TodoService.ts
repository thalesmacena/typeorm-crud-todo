import { exception } from 'console';
import { getCustomRepository } from 'typeorm';
import { Todo } from '../model/Todo';
import { TodoRepository } from '../repository/TodosRepository';

export default class TodoService {
  async getAllTodos(): Promise<Todo[]> {
    const todoRepository = getCustomRepository(TodoRepository);

    const toDos = await todoRepository.find();

    return toDos;
  }

  async getAllCheckedToDos(): Promise<Todo[]> {
    const todoRepository = getCustomRepository(TodoRepository);

    const toDos = await todoRepository.getCheckedToDo();

    return toDos;
  }

  async createTodo(todo): Promise<Todo> {
    const todoRepository = getCustomRepository(TodoRepository);

    const todoExistent = await todoRepository.findOne({
      where: {
        title: todo.title
      }
    });

    if (todoExistent) {
      throw exception;
    }

    const formattedTodo = {
      title: todo.title,
      description: todo.description,
      checked: false,
      updated_date: new Date(),
      created_date: new Date()
    };

    const createdTodo = await todoRepository.create(formattedTodo);

    await todoRepository.save(createdTodo);

    return createdTodo;
  }
}

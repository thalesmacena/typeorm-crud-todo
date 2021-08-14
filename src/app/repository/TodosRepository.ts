import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../model/Todo';

@EntityRepository(Todo)
class TodoRepository extends Repository<Todo> {
  getCheckedToDo = async (): Promise<Todo[]> => {
    const ToDos = await this.find({
      where: {
        checked: true
      }
    });

    return ToDos;
  };
}

export { TodoRepository };

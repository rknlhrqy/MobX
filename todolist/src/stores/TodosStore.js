import TodoStore from './TodoStore';
import { observable, action, computed } from 'mobx';

class TodosStore {
  @observable todos = [];
  @observable filter = '';

  constructor() {
  }

  @computed get filteredTodos() {
    const matchedFilter = new RegExp(this.filter, "i");
    return this.todos.filter((each) => !this.filter || matchedFilter.test(each));
  }

  @action createTodo(value) {
    this.todos.push(new TodoStore(value));
  }
}

const todosStore = new TodosStore();
export default todosStore;
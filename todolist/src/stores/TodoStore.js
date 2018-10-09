import { observable, action, computed } from 'mobx';

class TodoStore {

  @observable value;
  @observable id;
  @observable complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }

  @action toggleComplete() {
    this.complete = !this.complete;
  }
}

export default TodoStore;

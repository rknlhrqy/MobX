import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('todosStore')
@observer
class TodoList extends Component {
  getFilter(e) {
    this.props.todosStore.filter = e.target.value;
  }

  createNew(e) {
    if (e.which === 13) {
      this.props.todosStore.createTodo(e.target.value);
      e.target.value = '';
    }
  }

  toggleComplete(todo) {
    todo.toggleComplete();
  }

  render() {
    const { filter, filteredTodos, todos } = this.props.todosStore;
    const todoeach = filteredTodos.map((each) => {
      return <li key={each.id}>
      <input type="checkbox" onChange={this.toggleComplete.bind(this, each)}
        value={each.complete} checked={each.complete}/>
      { each.value }</li>
    });
    return(
      <div>
        <h1>MobX</h1>
        <input onKeyPress={this.createNew.bind(this)}/>
        <input value={filter} onChange={this.getFilter.bind(this)}/>
        <div>{filter}</div>
        <ul>{ todoeach }</ul>
      </div>
    );
  }
} 

export default TodoList;
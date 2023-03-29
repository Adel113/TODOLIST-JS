import React, { Component } from 'react'
import api from './Api';


class TodoList extends Component {
  
  componentDidMount() {
    this.fetchTodos();
  }

  async fetchTodos() {
    const response = await api.get('/todos');
    this.setState({ todos: response.data });
  }

  render() {
    const { todos } = this.state;

    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }



    componentDidUpdate() {
      this.props.inputElement.current.focus()
    }
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <h1>adel</h1>
            <form onSubmit={this.props.addItem}>
              <input
                placeholder="Task"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
              <button type="submit"> Add Task </button>
            </form>
          </div>
        </div>
      )
    }
   }
   
export default TodoList;
   

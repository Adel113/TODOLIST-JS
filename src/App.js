import React, { Component } from 'react'
import TodoList from './TodoList'
import './App.css'
import TodoItems from './TodoItems'
import api from './Api'
import axios from "axios"
class App extends Component {

 
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

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






 
inputElement=React.createRef();
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
 
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
 
 
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem}
         inputElement={this.inputElement}
         handleInput={this.handleInput}
         currentItem={this.state.currentItem} />
         <TodoItems entries={this.state.items} />
      </div>
    )
  }
}
export default App
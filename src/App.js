import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: 'react',
          description: 'create react todo app'
        },
        {
          id: 2,
          title: 'react-redux',
          description: 'intergrate react redux to todo app'
        }
      ]
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div>
        <NewTodo submitHandler={this.submitHandler} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App
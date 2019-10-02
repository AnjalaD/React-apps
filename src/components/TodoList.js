import React, { Component } from "react";
import { POINT_CONVERSION_COMPRESSED } from "constants";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const todoItems = this.props.todos.map(
            todo => <TodoItem key={todo.id} data={todo} />
        )

        return (
            <ul>
                {this.props.todos ? todoItems : "no todo items"}
            </ul>
        )
    }
}

export default TodoList
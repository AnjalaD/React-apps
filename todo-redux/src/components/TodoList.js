import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";


const TodoList = () => {
    const todos = useSelector(state => state.newTodo);

    const todoItems = todos.map(
        todo => <TodoItem data={todo} key={todo.id} />
    );

    return (
        <ul>
            {todos ? todoItems : "no todo items"}
        </ul>
    )
}

export default TodoList
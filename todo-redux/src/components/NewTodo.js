import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTodo, counter } from "../actions";

const NewTodo = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.counter)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const todo = {
            id: selector,
            title: title,
            description: description
        };

        dispatch(newTodo(todo));
        setInitialState()
    }

    const setInitialState = () => {
        setTitle("");
        setDescription("");
        dispatch(counter());
    }
    return (
        <form>
            <input
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
            ></input>
            <input
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                value={description}
            ></input>
            <button onClick={submitHandler}>Add</button>
        </form>
    )
}

export default NewTodo;
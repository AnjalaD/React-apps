import React from 'react'

const TodoItem = (props) => {
    return (
        <li>
            {props.data.title}
            <br></br>
            {props.data.description}
        </li>
    )
}

export default TodoItem
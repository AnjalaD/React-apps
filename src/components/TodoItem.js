import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.data
    }

    render() {
        return (
            <li>
                {this.state.title}
                <br></br>
                {this.state.description}
            </li>
        )
    }
}

export default TodoItem
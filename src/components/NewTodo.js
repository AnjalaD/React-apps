import React, { Component } from "react";

class NewTodo extends Component {
    constructor(props) {
        super(props)
        this.id = 3

        this.initialState = {
            id: this.id,
            title: '',
            description: ''
        }

        this.state = this.initialState

        this.fieldChangeHandler = this.fieldChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    fieldChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler(e) {
        e.preventDefault()
        this.id += 1
        this.props.submitHandler(this.state)
        this.setState(this.initialState)
    }

    render() {
        return (
            <form>
                <input
                    id="title"
                    name="title"
                    onChange={this.fieldChangeHandler}
                    type="text"
                    value={this.state.title}
                ></input>
                <input
                    id="description"
                    name="description"
                    onChange={this.fieldChangeHandler}
                    type="text"
                    value={this.state.description}
                ></input>
                <button onClick={this.submitHandler}>Add</button>
            </form>
        )
    }
}

export default NewTodo
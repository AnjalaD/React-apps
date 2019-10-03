export const counter = () => {
    return {
        type: 'COUNTER'
    }
}

export const newTodo = (todo) => {
    return {
        type: 'NEW_TODO',
        payload: todo
    }
}
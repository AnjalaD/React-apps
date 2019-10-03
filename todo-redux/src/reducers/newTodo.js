const initialState = [];
const newTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_TODO':
            return state = [...state, action.payload];
        default:
            return state;
    }
}

export default newTodoReducer;
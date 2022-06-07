export const initialState = JSON.parse(localStorage.getItem('todo_list')) || [];

const saveStateToStorage = (state) => {
    localStorage.setItem('todo_list', JSON.stringify(state));
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newList = [...state];
            newList.push(action.payload);

            saveStateToStorage(newList);

            return newList;
        }
        case 'UPDATE_TODO': {
            const todoToUpdate = state.find(todo => todo.id === action.payload.id);
            if (!todoToUpdate) {
                return state;
            }

            todoToUpdate.status = action.payload.status;

            state.splice(state.indexOf(todoToUpdate), 1, { ...todoToUpdate });

            saveStateToStorage(state);
            
            return [...state];
        }
        default: {
            return state;
        }
    }
}
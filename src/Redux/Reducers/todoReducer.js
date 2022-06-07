import { createSlice } from '@reduxjs/toolkit';

const saveStateToStorage = (state) => {
    localStorage.setItem('todo_list', JSON.stringify(state));
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: JSON.parse(localStorage.getItem('todo_list')) || [],
    reducers: {
        todoAdd: (state, action) => {
            state.push(action.payload);
            saveStateToStorage(state);
        },
        
        todoUpdate: (state, action) => {
            const todoToUpdate = state.find(todo => todo.id === action.payload?.id);
            if (!todoToUpdate) {
                return state;
            }
            
            todoToUpdate.status = action.payload.status;

            state.splice(state.indexOf(todoToUpdate), 1, { ...todoToUpdate });
            
            saveStateToStorage(state);
        }
    }
})

export const { todoAdd, todoUpdate } = todoSlice.actions;

export default todoSlice.reducer;

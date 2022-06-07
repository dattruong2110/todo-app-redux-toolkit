import React from "react";
import './filters.css';
import { TextField, Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import { v4 } from 'uuid';
import { store } from "../../Redux/Actions/actions";
import { TodoList } from "../TodoList/todoList";


export function Filters() {

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const value = document.getElementById('text-todo-id')?.value;
        if (!value) {
            return;
        }

        console.log('Submit', value);
        store.dispatch({
            type: 'ADD_TODO',
            payload: { 
                    id: v4(),
                    content: value,
                    status: 'todo'
                 }
        });

        document.getElementById('form-todo-id').reset();
    };

    return (
        <div className='filters-styles'>
            <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Your ToDo</h3>
            <form
                id='form-todo-id'
                className='form-todo'
                style={{ marginTop: 10 }}
                onSubmit={handleOnSubmit}
            >
                <TextField 
                    id='text-todo-id' 
                    className='text-todo'
                    type={'text'}
                    label='Enter your ToDo' 
                    variant='outlined' 
                    color='primary'
                    size='small'
                />
                <Button 
                    id='add-todo-btn-id'
                    className='add-todo-btn' 
                    variant='contained' 
                    size='large'
                    style={{ marginLeft: 1, backgroundColor: '#cc93e2', color: '#fff' }}
                    onClick={handleOnSubmit}
                >
                    <AddIcon />
                </Button>
            </form>

            <TodoList />
        </div>
    )
}
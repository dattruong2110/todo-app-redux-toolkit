import React, { useState } from 'react';
import { store } from '../../Redux/Actions/actions';
import { todoUpdate } from '../../Redux/Reducers/todoReducer';

export const Todo = (props) => {
    // const [status, setStatus] = useState('todo');

    const { status } = props;

    const handleOnclick = (e) => {
        e.preventDefault();

        // update local state
        let newStatus = '';
        if (status === 'todo') {
            newStatus = 'completed';
        } else {
            newStatus = 'todo';
        }

        store.dispatch(
            todoUpdate({
                type: 'UPDATE_TODO',
                payload: {
                    id: props.id,
                    status: newStatus,
                }
            })
        );
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <li
                onClick={handleOnclick}
                style={{
                    fontSize: '1.2rem',
                    lineHeight: '2rem',
                    color: '#333',
                    textDecorationLine: props.status==='completed' ? 'line-through' : 'none'
                }}
            >
                {props.content}
            </li>
        </div>
    )
}

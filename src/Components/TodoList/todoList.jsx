import React from 'react'
import { Todo } from '../Todo/todo'
import { useSelector } from 'react-redux';

const todoSelector = (state) => {
    console.log('Current state:', state);
    return state;
}

export const TodoList = () => {
    const todoFromSelector = useSelector(todoSelector);

    return (
        <div>
            {todoFromSelector.map(todo => {
                return (<Todo
                            key={todo.id}
                            id={todo.id}
                            content={todo.content}
                            status={todo.status}
                        >
                </Todo>)
            })}
        </div>
    )
}
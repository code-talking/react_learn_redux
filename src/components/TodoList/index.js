import React, {Component} from 'react';
import Todo from '../Todo';

const TodoList = ({list, onTodoClick}) => {
    return (
        <ul>
            {list.map(todo => {
                return (
                    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
                );
            })}
        </ul>
    );
}

export default TodoList;
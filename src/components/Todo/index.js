import React from 'react';

//  接收三个参数
const Todo = ({onClick, completed, text}) => {
    return (
        <li
            onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {text}
        </li>
    );
};

export default Todo;
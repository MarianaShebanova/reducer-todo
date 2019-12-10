import React, { useState } from 'react';

const Todo = props => {

const [task, setTask] = useState(props.item);
 
function handleClick(e) {
    e.preventDefault();
    props.changeCompleted(props.item);
    setTask({ ...task, completed: !task.completed});
    console.log(props.item);
}

return (
  <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
    <p >{props.item.task}</p>
</div>
);
};

export default Todo;

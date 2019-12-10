import React, { useState } from 'react';

const TodoForm = props => {
    // Constructor with state
    const[newItem, setItem] = useState('');

    const handleChanges = e => {
        // update state with each keystroke
        setItem(e.target.value);
    };

    // class property to submit form
    const handleSubmit = e => {
        e.preventDefault();
        props.addItem(newItem);
        setItem('');
    };

    const handleClear = e => {
        props.change();
    };

    // lifecycle method - in charge of _Rendering_ JSX to the DOM
    
    return (
        <form onSubmit={handleSubmit}>
            {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
            <input
                value={newItem}
                onChange={handleChanges}
                type="text"
                name="item"
            />
            <button>Add Todo</button>
            <button className="clear-btn" onClick={handleClear}>
                Clear Completed
            </button>
        </form>
        );
}

export default TodoForm;

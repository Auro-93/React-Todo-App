import React from 'react';
import './todo-drag-drop.css';

function TodoDragDrop({isDark}) {
    return (
        <div 
            className ={isDark ? 'drag-drop dark-text2' : 'drag-drop light-text2'}
        >
            Drag and drop to reorder list
        </div>
    )
}

export default TodoDragDrop

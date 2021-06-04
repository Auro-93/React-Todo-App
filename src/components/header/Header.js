import React from 'react';
import './header.css';
import ConditionalIcon from '../conditional-icon/ConditionalIcon.js';
import TodoContainer from '../todo-container/TodoContainer.js';
 


function Header(props) {
    return (
       <header className = 'header'>
        <div 
            className = 'header-wrapper'
        >
            <h1>
                TODO
            </h1>
           
            <div className = 'svg-container'>
                <ConditionalIcon 
                    isDark = {props.isDark} 
                    handleClick = {props.handleClick}
                />
            </div> 
        </div>
            <TodoContainer 
                isDark = {props.isDark}
            /> 
       </header>
    )
}

export default Header

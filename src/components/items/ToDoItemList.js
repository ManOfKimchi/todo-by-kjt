import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component {
    static defaultProps = {
        todoItemList: []
    }

    constructor(props) {
        super(props);
    }
    
    render () {
        const todoList = this.props.todoItemList.map(
            ({id, text}) => (
                <ToDoItem 
                    key={id}
                    text={text}
                />
            )
        );
        return (
            <ul>
                ul 그룹이다
                {todoList}
            </ul>
            
        )
    }
}

export default ToDoItemList;
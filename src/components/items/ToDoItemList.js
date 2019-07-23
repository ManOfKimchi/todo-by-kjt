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
            ({guid, todoText, created}) => (
                <ToDoItem 
                    guid={guid}
                    todoText={todoText}
                    created={created}
                    deleteItemToLocalStorageFn={this.props.deleteItemToLocalStorageFn}
                />
            )
        );
        return (
            <table border="1">
                {todoList}
            </table>
        )
    }
}

export default ToDoItemList;
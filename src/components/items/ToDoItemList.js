import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component {
    props = {
        todoItemList: this.props.toDoItemList
    }

    todoItemListSet () {
        var a = "";
        console.log(this.props.todoItemList);
        var aa = this.props.todoItemList.todoItem.reduce(x => (<ToDoItem id={x.id} text={x.text}></ToDoItem>));

        return aa;
        //return this.props.toDoItemList.concat(todo => (<TodoItem id={todo.id} text={todo.text} />));
    }
    
    render () {
        // spread 형태로 todo 조회한거 뿌려줘야 함
        return (
            <ul>
                ul 그룹이다
                {this.todoItemListSet()}
            </ul>
            
        )
    }
}

export default ToDoItemList;
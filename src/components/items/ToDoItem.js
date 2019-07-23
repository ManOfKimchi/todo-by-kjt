import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    onClickFn = (e) => {
        this.props.deleteItemToLocalStorageFn(this.props.guid);
    }

    render () {
        return (
            <tr>
                <td>{this.props.guid}</td>
                <td>{this.props.todoText}</td>
                <td>{this.props.created}</td>
                <td><button onClick={this.onClickFn}>X</button></td>
            </tr>
        )
    }
}

export default ToDoItem;
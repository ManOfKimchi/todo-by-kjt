import React, { Component } from 'react';

class ToDoItem extends Component {
    props = {
        id: this.props.id,
        text: this.props.text
    }

    render () {
        console.log("todoitem");
        return (
            <li>{this.props.text}</li>
        )
    }
}

export default ToDoItem;
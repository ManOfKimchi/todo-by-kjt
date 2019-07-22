import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <li>{this.props.key} - {this.props.text}</li>
        )
    }
}

export default ToDoItem;
import React, { Component, Fragment } from 'react';

class ToDoAdd extends Component {
    static defaultProps = {
        buttonName: 'default button name'
    }
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Fragment>
                <button onClick={this.props.addTodoItemFn}>{this.props.buttonName}</button>
            </Fragment>
        )
    }
}

export default ToDoAdd;
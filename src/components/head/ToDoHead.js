import React, { Component, Fragment } from 'react';

class ToDoHead extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h2 onClick={this.props.refreshFn}>Todo List by KJT</h2>
            </Fragment>
        )
    }
}

export default ToDoHead;


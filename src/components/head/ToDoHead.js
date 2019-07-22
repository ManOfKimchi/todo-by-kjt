import React, { Component, Fragment } from 'react';

class ToDoHead extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <h2 onClick={this.props.refreshFn}>적절한 제목</h2>
            </Fragment>
        )
    }
}

export default ToDoHead;


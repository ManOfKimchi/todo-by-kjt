import React, { Component, Fragment } from 'react';

class ToDoInput extends Component {
    addButtonClick() {
        alert("너 지금 나 눌럿냐?");
    }

    render () {
        return (
            <Fragment>
                <input placeholder="여기에 미룰 일을 적으시오"></input>
                <button onClick={this.addButtonClick}>default button text</button>
            </Fragment>
        )
    }
}

export default ToDoInput;
import React, { Component, Fragment } from 'react';
import Input from '@material-ui/core/Input';
import { styled } from '@material-ui/styles';

const TodoInput = styled(Input)({
    width: "60%"
});

class ToDoInput extends Component {
    static defaultProps = {
        placeholder: "Add your todo..."
    }
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Fragment>
                <TodoInput 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.keyChange} 
                    value={this.props.input}></TodoInput>
            </Fragment>
        )
    }
}

export default ToDoInput;
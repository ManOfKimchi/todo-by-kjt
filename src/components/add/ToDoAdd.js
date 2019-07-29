import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

const StyledButton = styled(Button)({
    backgroundColor: 'rgba(218, 222, 158)',
    "&:hover": {
        backgroundColor: 'rgba(218, 222, 158)'
    }
});

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
                <StyledButton 
                    onClick={this.props.addTodoItemFn}>
                    {this.props.buttonName}
                </StyledButton>
            </Fragment>
        )
    }
}

export default ToDoAdd;
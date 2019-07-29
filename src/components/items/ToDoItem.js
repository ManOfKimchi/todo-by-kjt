import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TdText = styled(TableCell)({
    wordBreak: "break-all"
});

const DeleteButton = styled(Button)({
    backgroundColor: 'rgba(90, 87, 255)',
    "&:hover": {
        backgroundColor: 'rgba(90, 87, 255)'
    },
    color: 'rgba(255, 255, 255)'
});

class ToDoItem extends Component {
    state = {
        backgroundColor: 'rgba(204, 255, 252)'
    }
    constructor(props) {
        super(props);
        console.log(props.checked);
        this.state = {
            backgroundColor: this.getBackgroundColor(this.props.checked)
        }
    }

    getBackgroundColor(checked) {
        return checked ? 'rgba(255, 91, 79)' : 'rgba(204, 255, 252)';
    }

    deleteClickFn = (e) => {
        this.props.deleteItemToLocalStorageFn(this.props.guid);
    }

    onClickFn = (e) => {
        this.setState({
            backgroundColor: this.getBackgroundColor(!this.props.checked)
        });
        this.props.checkChangeFn(this.props);
    }

    render () {
        return (
            <TableRow style={{backgroundColor: this.getBackgroundColor(this.props.checked)}}>
                <TdText colSpan={7} onClick={this.onClickFn}>
                    {this.props.todoText}
                </TdText>
                <TdText colSpan={5}>{this.props.created}</TdText>
                <TdText colSpan={1}>
                    <DeleteButton onClick={this.deleteClickFn}>X</DeleteButton>
                </TdText>
            </TableRow>
        )
    }
}

export default ToDoItem;
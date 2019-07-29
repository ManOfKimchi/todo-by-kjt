import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import Table from '@material-ui/core/Table';
import { styled } from '@material-ui/styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const TodoTable = styled(Table)({
    backgroundColor: 'rgba(237, 255, 254)'
});

const TodoTableHead = styled(TableHead)({
    // backgroundColor: 'rgba(0, 8, 54)',
    // color: 'rgba(255, 255, 255)'
});

const StyledTableCell = styled(TableCell)({
    backgroundColor: 'rgba(0, 8, 54)',
    color: 'rgba(255, 255, 255)'
});

const StyledButton = styled(Button)({
    backgroundColor: 'rgba(90, 87, 255)',
    "&:hover": {
        backgroundColor: 'rgba(90, 87, 255)'
    },
    color: 'rgba(255, 255, 255)'
});

class ToDoItemList extends Component {    
    static defaultProps = {
        todoItemList: []
    }

    constructor(props) {
        super(props);
    }
    
    render () {
        const todoList = this.props.todoItemList.map(
            ({guid, todoText, created, checked}) => (
                <ToDoItem 
                    guid={guid}
                    todoText={todoText}
                    created={created}
                    checked={checked}
                    deleteItemToLocalStorageFn={this.props.deleteItemToLocalStorageFn}
                    checkChangeFn={this.props.updateFn}
                />
            )
        );
        return (
            <TodoTable>
                <TodoTableHead>
                    <TableRow>
                        <StyledTableCell colSpan={7}>Things to do</StyledTableCell>
                        <StyledTableCell colSpan={5}>Created</StyledTableCell>
                        <StyledTableCell colSpan={1}>
                            <StyledButton onClick={this.props.clearFn}>Clear</StyledButton>
                        </StyledTableCell>
                    </TableRow>
                </TodoTableHead>
                {todoList}
            </TodoTable>
        )
    }
}

export default ToDoItemList;
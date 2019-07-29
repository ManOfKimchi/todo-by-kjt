import React, { Component, Fragment } from 'react';
import ToDoInput from './ToDoInput';
import ToDoAdd from './ToDoAdd';

const ToDoInputContainer = ({addTodoItemFn, input, keyChange}) => {
    return (
        <Fragment >
            <ToDoInput input={input}
                keyChange={keyChange}></ToDoInput>
            <ToDoAdd buttonName={"Add"} addTodoItemFn={addTodoItemFn}></ToDoAdd>
        </Fragment>
    );
}

export default ToDoInputContainer;
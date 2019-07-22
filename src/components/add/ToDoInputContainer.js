import React, { Component, Fragment } from 'react';
import ToDoInput from './ToDoInput';
import ToDoAdd from './ToDoAdd';

const ToDoInputContainer = ({addTodoItemFn, input, keyChange}) => {
    return (
        <Fragment>
            <ToDoInput placeholder={"placeholder 덮어쓰기"} input={input}
                keyChange={keyChange}></ToDoInput>
            <ToDoAdd buttonName={"Add"} addTodoItemFn={addTodoItemFn}></ToDoAdd>
        </Fragment>
    );
}

export default ToDoInputContainer;
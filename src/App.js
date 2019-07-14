import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ToDoHead from './components/head/ToDoHead';
import ToDoInput from './components/add/ToDoInput';
import ToDoItemList from './components/items/ToDoItemList';

let testData = {
  todoItem: [
    { id: 1, text: "aaa"},
    { id: 2, text: "bbb"},
    { id: 3, text: "ccc"}
  ]
};


function App() {
  return (
    <div className="App">
      <ToDoHead></ToDoHead>
      <ToDoInput></ToDoInput>
      <ToDoItemList todoItemList={testData}></ToDoItemList>
    </div>
  );
}

export default App;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ToDoHead from './components/head/ToDoHead';
import ToDoInput from './components/add/ToDoInput';
import ToDoItemList from './components/items/ToDoItemList';
import ComponentTemplate from './components/componentTemplate';
import FunctionalComponentTemplate from './components/functionalComponentTemplate';

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
      {/* 컴포넌트 구조에 익숙해지기 위한 연습용 */}
      <ComponentTemplate></ComponentTemplate>
      <br></br>
      <FunctionalComponentTemplate></FunctionalComponentTemplate>
      <br></br>

      {/* Todolist 컴포넌트 배치 */}
      <ToDoHead></ToDoHead>
      <ToDoInput></ToDoInput>
      <ToDoItemList todoItemList={testData}></ToDoItemList>
    </div>
  );
}

export default App;


//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ToDoHead from './components/head/ToDoHead';
import ToDoItemList from './components/items/ToDoItemList';
import ToDoInputContainer from './components/add/ToDoInputContainer';

const localStorageKey = 'todo_kjt';

class App extends Component {

  state = {
    input: '',
    todoList: this.getItemFromLocalStorage()
  }

  refresh = (e) => {
    window.location.reload();
  }
  
  keyChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  // localStorage 저장 데이터
  // sample = {
  //   guid: 'guid',
  //   todoText: 'todo',
  //   created: new Date(),
  //   checked: true/false
  // }

  addTodoItem = (e) => {
    if (this.state.input.length === 0) return;
    let newItem = {
      guid: this.createGuid(),
      todoText: this.state.input,
      created: this.getFormatDate((new Date())),
      checked: false
    };
    this.setState({
      input: '',
      todoList: this.state.todoList.concat(newItem)
    });
    this.addItemToLocalStorage(newItem.guid, newItem.todoText, newItem.created);
  }

  updateTodoItem = (todo) => {
    var dataList = this.getItemFromLocalStorage();
    var updateTarget = dataList.find(d => d.guid === todo.guid);
    if (!updateTarget) return;
    updateTarget.checked = !todo.checked;
    dataList = this.sortByChecked(dataList);
    this.updateItemToLocalStorage(dataList);
    this.setState({
      todoList: dataList
    });
  }

  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getFormatDate(date) { 
    var year = date.getFullYear() - 2000;	//yyyy 
    var month = (1 + date.getMonth());	//M 
    month = month >= 10 ? month : '0' + month;	//month 두자리로 저장 
    var day = date.getDate();	//d 
    day = day >= 10 ? day : '0' + day;	//day 두자리로 저장 
    return year + '-' + month + '-' + day; 
  }


  // localStorage 관련

  addItemToLocalStorage(guid, text, created) {
    // 기존 데이터(또는 초기데이터)
    var localDataStr = localStorage.getItem(localStorageKey) 
      ? localStorage.getItem(localStorageKey)
      : "[]";
    // 기존데이터에 저장하기 위해 파싱
    var localData = JSON.parse(localDataStr);
    localData.push({
      guid: guid,
      todoText: text,
      created: created,
      checked: false
    });
    localStorage.setItem(localStorageKey, JSON.stringify(localData));
  }

  updateItemToLocalStorage(dataList) {
    this.clearLocalStorage();    
    var encodedData = JSON.stringify(dataList);
    localStorage.setItem(localStorageKey, encodedData);
  }

  getItemFromLocalStorage() {
    var localStorageData = localStorage.getItem(localStorageKey);
    var parsedData = localStorageData 
      ? JSON.parse(localStorageData)
      : [];
    var todoItemList = parsedData 
      ? parsedData
      : [];
    return this.sortByChecked(todoItemList);
  }

  deleteItemToLocalStorage = (guid) => {
    // todo_kjt 키에 저장된 string 중 해당 todo 제거 후 덮어씌움
    var localData = this.getItemFromLocalStorage();
    if (!Array.isArray(localData) || localData.length < 1) return;
    var filtered = localData.filter(d => d.guid !== guid);
    this.setState({
      todoList: filtered
    });
    localStorage.setItem(localStorageKey, JSON.stringify(filtered));
  }

  clearLocalStorage = (e) => {
    this.setState({
      todoList: []
    });
    localStorage.setItem(localStorageKey, []);
  }

  sortByChecked(dataList) {
    // 체크한 아이템이 앞에 오도록 정렬
    var checked = [];
    var unchecked = [];
    dataList.map(d => {
      d.checked ? checked.push(d) : unchecked.push(d);
    });
    return checked.concat(unchecked);
  }

  render() {
    const { input, todoList } = this.state;
    const {
      refresh,
      keyChange,
      addTodoItem,
      updateTodoItem,
      deleteItemToLocalStorage,
      clearLocalStorage
    } = this;

    return (
      <div className="App">  
        {/* Todolist 컴포넌트 배치 */}
        <ToDoHead refreshFn={refresh}></ToDoHead>
        <ToDoInputContainer 
          addTodoItemFn={addTodoItem} 
          input={input}
          keyChange={keyChange}></ToDoInputContainer>
        <ToDoItemList 
          todoItemList={todoList}
          deleteItemToLocalStorageFn={deleteItemToLocalStorage}
          clearFn={clearLocalStorage}
          updateFn={updateTodoItem}></ToDoItemList> 
      </div>
    );
  }
  
}

export default App;

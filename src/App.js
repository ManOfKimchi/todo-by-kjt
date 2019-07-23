
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
    console.log(e.target.value);
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  // localStorage 저장 데이터
  // sample = {
  //   guid: 'guid',
  //   todoText: 'todo',
  //   created: new Date()
  // }

  addTodoItem = (e) => {
    let newItem = {
      guid: this.createGuid(),
      todoText: this.state.input,
      created: (new Date()).toString()
    };
    this.setState({
      input: '',
      todoList: this.state.todoList.concat(newItem)
    });
    this.addItemToLocalStorage(newItem.guid, newItem.todoText, newItem.created);
  }

  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
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
      created: created
    });
    localStorage.setItem(localStorageKey, JSON.stringify(localData));
  }

  getItemFromLocalStorage() {
    var localStorageData = localStorage.getItem(localStorageKey);
    var parsedData = localStorageData 
      ? JSON.parse(localStorageData)
      : [];
    var todoItemList = parsedData 
      ? parsedData
      : [];
    return todoItemList;
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

  clearLocalStorage() {
    localStorage.setItem(localStorageKey, []);
  }

  render() {
    const { input, todoList } = this.state;
    const {
      refresh,
      keyChange,
      addTodoItem,
      deleteItemToLocalStorage
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
          deleteItemToLocalStorageFn={deleteItemToLocalStorage}></ToDoItemList> 
      </div>
    );
  }
  
}

export default App;



// import React, { Component } from 'react';
// import TodoListTemplate from './components/TodoListTemplate';
// import Form from './components/Form';
// import TodoItemList from './components/TodoItemList';


// class App extends Component {

//   id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

//   state = {
//     input: '',
//     todos: [
//       { id: 0, text: ' 리액트 소개', checked: false },
//       { id: 1, text: 'JSX 사용해보기', checked: true },
//       { id: 2, text: '라이프 사이클 이해하기', checked: false },
//     ]
//   }

//   handleChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       input: e.target.value // input 의 다음 바뀔 값
//     });
//   }

//   handleCreate = () => {
//     const { input, todos } = this.state;
//     this.setState({
//       input: '', // 인풋 비우고
//       // concat 을 사용하여 배열에 추가
//       todos: todos.concat({
//         id: this.id++,
//         text: input,
//         checked: false
//       })
//     });
//   }

//   handleKeyPress = (e) => {
//     // 눌려진 키가 Enter 면 handleCreate 호출
//     if(e.key === 'Enter') {
//       this.handleCreate();
//     }
//   }

//   handleToggle = (id) => {
//     const { todos } = this.state;
    
//     // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
//     const index = todos.findIndex(todo => todo.id === id);
//     const selected = todos[index]; // 선택한 객체

//     const nextTodos = [...todos]; // 배열을 복사
    
//     // 기존의 값들을 복사하고, checked 값을 덮어쓰기
//     nextTodos[index] = { 
//       ...selected, 
//       checked: !selected.checked
//     };

//     this.setState({
//       todos: nextTodos
//     });
//   }

//   handleRemove = (id) => {
//     const { todos } = this.state;
//     this.setState({
//       todos: todos.filter(todo => todo.id !== id)
//     });
//   }

//   render() {
//     const { input, todos } = this.state;
//     const {
//       handleChange,
//       handleCreate,
//       handleKeyPress,
//       handleToggle,
//       handleRemove
//     } = this;

//     return (
//       <TodoListTemplate form={(
//         <Form 
//           value={input}
//           onKeyPress={handleKeyPress}
//           onChange={handleChange}
//           onCreate={handleCreate}
//         />
//       )}>
//         <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
//       </TodoListTemplate>
//     );
//   }
// }

// export default App;
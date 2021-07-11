import TodoList from './component/TodoList';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid';
import './index.css';

const data = "data";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const getData = localStorage.getItem(data);
    if(getData){
      setTodoList(JSON.parse(getData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(data, JSON.stringify(todoList));
  }, [todoList])

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  },[]);

  const onAddInput = useCallback((e) =>{
    setTodoList([
      {id: v4(), name: textInput, isComplete: false},
      ...todoList
    ])
  },[textInput, todoList])

  return (
    <>
      <h3>Danh sách ghi chú</h3>
      <Textfield name="app-todo" placeholder="Mời nhập..." elemAfterInput={
        <Button isDisabled={!textInput} appearance="primary" onClick={onAddInput}>Thêm</Button>
      }
      css={{padding:"5px"}}
      value={textInput}
      onChange={onTextInputChange}
      >

      </Textfield>
      <TodoList todoList={todoList}/>
    </>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from "./types/types";
import {v4 as uuidv4} from 'uuid'
import AddForm from "./components/AddForm";
import List from "./components/List";

function App() {
  const [todo,setTodo] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const newTodo:Todo = {
      id: uuidv4(),
      text: input,
      isDone: false,
    }
    setTodo([...todo, newTodo]);
    setInput('');
  }

  const handleDelete = (id:string) => {
    const newList = todo.filter((item) => item.id !== id)
    setTodo(newList)
  }

  const clearAll = () => {
    setTodo([]);
  }

  const hanldeDone = (id: string) => {
    const target = todo.findIndex((item) => item.id === id);
    todo[target] = {...todo[target], isDone: !todo[target].isDone}
    setTodo([...todo])
  }

  const editTodo = (id: string, editText: string) => {
    const target =  todo.findIndex((item) => item.id === id);
    todo[target] = {...todo[target], text: editText}
    setTodo([...todo])
  }

  useEffect(() => console.log(todo), [todo])

  return (
    <div className="App">
      {/*  Add Form*/}
      <AddForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
      {/*  List*/}
      <List todo={todo} clearAll={clearAll} handleDelete={handleDelete} handleDone={hanldeDone} editTodo={editTodo} />
    </div>
  );
}

export default App;

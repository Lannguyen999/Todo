import React, {useEffect, useState} from 'react';
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
      <div className={'bg-green-400 fixed top-0 inset-x-0'}>
        <header className={'max-w-screen-xl mx-auto p-3'}>
          <h1 className={'text-xl text-white'}>Todo App</h1>
        </header>
      </div>
      {/*  Add Form*/}
      <div className={'max-w-screen-xl mx-auto mt-14 p-3'}>
        <AddForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
      </div>
      {/*  List*/}
      <div className={'max-w-screen-xl mx-auto'}>
        <List todo={todo} clearAll={clearAll} handleDelete={handleDelete} handleDone={hanldeDone} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;

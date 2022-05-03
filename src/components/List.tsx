import React from 'react'
import {Todo} from "../types/types";
import ListItem from "./ListItem";

interface Props{
    todo: Todo[];
    clearAll: ()=> void
    handleDelete: (id:string) => void;
    handleDone: (id:string) => void;
    editTodo: (id:string, editText: string) => void
}

const List = ({todo, clearAll, handleDelete, handleDone, editTodo}: Props) => {
    return(
        <div>
            <button onClick={() => clearAll()}>Clear All</button>
            {todo.map((item) => (
                <ListItem item={item} handleDelete={handleDelete} handleDone={handleDone} editTodo = {editTodo} />
            ))}
        </div>
    )
}

export default List

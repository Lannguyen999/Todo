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
        <div className={'flex flex-col'}>
            <button onClick={() => clearAll()} className={'text-white bg-red-400 p-2 rounded-md w-1/3 mx-auto'}>
                <i className="fas fa-eraser"></i>
                Clear All</button>
            <div>
            {todo.map((item) => (
                <ListItem item={item} handleDelete={handleDelete} handleDone={handleDone} editTodo = {editTodo} />
            ))}
            </div>
        </div>
    )
}

export default List

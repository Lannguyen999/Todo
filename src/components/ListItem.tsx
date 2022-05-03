import React, {useState} from 'react'
import {Todo} from "../types/types";

interface Props{
    item: Todo;
    handleDelete: (id:string) => void;
    handleDone: (id:string) => void
    editTodo: (id: string, editText: string) => void
}

const ListItem = ({item, handleDelete, handleDone, editTodo}: Props) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editInput, setEditInput] = useState(item.text)

    const handleEdit = (e:any) => {
        e.preventDefault()
        editTodo(item.id, editInput)
        setIsEdit(false)
    }

    return(
        <div className = 'row'>
            {!isEdit ? (<>
                <div className={`${item.isDone && 'strikethrough'}`}>{item.text}</div>
                <div>
                    {!item.isDone ?
                        <button onClick={() => handleDone(item.id)}>Done</button>
                        :  <button onClick={() => handleDone(item.id)}>Undo</button>}
                    {!item.isDone && <button onClick={() => setIsEdit(true)}>Edit</button>}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            </>) : (
                <form onSubmit={handleEdit}>
                    <input type="text"
                           value={editInput}
                           onChange={(e) => setEditInput(e.target.value)}/>
                    <button type='submit'>Edit</button>
                </form>
            )}

        </div>
    )
}

export default ListItem

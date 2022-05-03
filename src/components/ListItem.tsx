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
        <div className = 'flex justify-between items-center w-2/3 mx-auto py-3 px-5 border border-black mt-5 rounded-3xl'>
            {!isEdit ? (<>
                <div className={`${item.isDone && 'line-through'}`}>{item.text}</div>
                <div>
                    {!item.isDone ?
                        <button onClick={() => handleDone(item.id)} className={'mr-2 bg-lime-400 text-white p-2 rounded-md'}><i className="fas fa-check"></i></button>
                        :  <button onClick={() => handleDone(item.id)}  className={'mr-2 bg-purple-400 text-white p-2 rounded-md'}><i className="fas fa-rotate-left"></i></button>}
                    {!item.isDone && <button onClick={() => setIsEdit(true)}  className={'mr-2 bg-sky-400 text-white p-2 rounded-md'}><i className="fas fa-edit"></i></button>}
                    <button onClick={() => handleDelete(item.id)}  className={'mr-2 bg-red-400 text-white p-2 rounded-md'}><i className="fas fa-trash"></i></button>
                </div>
            </>) : (
                <form onSubmit={handleEdit} className={'w-full flex justify-between items-center'}>
                    <input type="text"
                           value={editInput}
                           onChange={(e) => setEditInput(e.target.value)}
                           className={'border-b border-black mr-3 w-2/3 outline-none '}
                    />
                    <button type='submit' className={'mr-2 bg-sky-400 text-white p-2 rounded-md'}><i className="fas fa-edit"></i></button>
                </form>
            )}

        </div>
    )
}

export default ListItem

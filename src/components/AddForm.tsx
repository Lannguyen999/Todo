import React from 'react'

interface Props{
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e:any) => void
}

const AddForm = ({input, setInput, handleSubmit}: Props) => {
    return(
        <form onSubmit={handleSubmit} className={'flex justify-center items-center'}>
            <input type="text"
                   placeholder='Enter a todo'
                   value={input}
                   className={'w-1/2 border-2 border-black text-lg px-4 py-1 rounded-3xl outline-none'}
                   onChange={(e) => setInput(e.target.value)} />
            <button type='submit' className={'px-2 py-1 bg-blue-400 text-xl rounded-xl ml-2'}>
                <i className="fas fa-plus"></i>
                Add Todo</button>
        </form>
    )
}

export default AddForm

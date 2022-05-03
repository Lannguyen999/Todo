import React from 'react'

interface Props{
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e:any) => void
}

const AddForm = ({input, setInput, handleSubmit}: Props) => {
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder='Enter a todo'
                   value={input}
                   onChange={(e) => setInput(e.target.value)} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default AddForm

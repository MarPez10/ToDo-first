import React, { useState }from "react";

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) =>{
        setTodos(prev => [
            {
                _id:new Date(),
                title,
                isCompleted:false,
            },
            ...prev, 
        ])
        setTitle('')
    }

    return <div className="flex items-center justify-between mb-4 rounded-xl bg-zinc-800 p-5 w-full mt-20">
        <input type="text" 
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className= 'bg-transparent w-full border-none outline-none'
        placeholder="Add a task"
        />
    </div>
}

export default CreateTodoField
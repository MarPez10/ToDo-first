import React, { useState } from 'react' 
import TodoItem from './Item/TodoItem'
import CreateTodoField from './CreateTodoField/CreateTodoField'

const data = [
    {
        _id: '1',
        title:'Купить пиво',
        isCompleted: false,
    },
    {
        _id: '12',
        title:'Купить ещё пиво',
        isCompleted: false,
    },
    {
        _id: '123',
        title:'Завалится спать',
        isCompleted: false,
    },
]

const Home = () => { 
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find (t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    const removeTodo = (id) => 
        setTodos([...todos].filter(t=> t._id != id))
    

    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold text-center mb-10">Todo for junior</h1>
            {todos.map(todo => (
                <TodoItem 
                todo={todo} 
                key={todo._id} 
                changeTodo = {changeTodo} 
                removeTodo={removeTodo}/>
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}
export default Home 
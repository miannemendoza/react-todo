import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Row } from './Row'
import { data } from '../todoscopy'
import { AddTodo } from './AddTodo'
import { v4 as uuidv4 } from "uuid"
type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(data)
    const [task, setTask] = useState("")
    const [time, setTime] = useState("")
    const todosLength = todos.length
    const hasTodo = todos.length > 0
    const remainingTodo = todos.filter((todo) => !todo.isCompleted).length
    const myTodoState = todos.map((todo) => todo.isCompleted)
    const handleDeleteTodo = (id: string) => {
        const updatedTodo = todos.filter((todo) => todo.id != id)
        setTodos(updatedTodo)
    }

    const handleCheckedTodo = (id: string) => {
        const updatedTodo = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }

            return todo
        })
        setTodos(updatedTodo)
    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement
        setTask(value)
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault();
        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false
        }
        console.log(remainingTodo, "I AM REMAINING TODO")
        task && handleAddTodo(todo)
    }

    const handleAddTodo = (todo: Todo) => {
        const updatedTodo = [...todos, todo]
        setTodos(updatedTodo)
        setTask("")
    }

    const dateToday = new Date
    setInterval(() => {
        const newT = new Date().toLocaleTimeString()
        setTime(newT)
    }, 1000);


    return (
        <section className='w-10/12 max-w-2xl flex flex-col items-center'>
            <div className='my-10 text-center'>
                <h1 className='text-5xl mb-1'>Simple Todo App</h1>
                <p className='mb-1'>Made with Vue.js</p>
                <p>{dateToday.toDateString()}, {time}</p>
            </div>
            {todos.map((todo) => (
                <Row
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCheckedTodo={handleCheckedTodo}
                />
            ))}
            <div className='h-10' />
            <AddTodo
                task={task}
                handleSubmitTodo={handleSubmitTodo}
                handleChange={handleChange}
            />
            {hasTodo && (
                <p>{`[${remainingTodo} of ${todosLength}] todos remaining`}</p>
            )}
            {!hasTodo && (
                <p>Please add some todos!</p>
            )}
        </section>
    )
}

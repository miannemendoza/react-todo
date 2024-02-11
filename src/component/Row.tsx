import React from 'react'

type Todo = {
  id: string
  task: string
  isCompleted: boolean
}

type TodoProps = {
  todo: Todo
  handleDeleteTodo: (id: string) => void
  handleCheckedTodo: (id: string) => void
}

export const Row = (props: TodoProps) => {
  return (
    <div className={`flex w-full p-4 mb-2 justify-between ${props.todo.isCompleted ? " bg-emerald-400 rounded-lg" : "bg-white rounded-lg border-red-400 border-2"}`}>

      <p className={`ml-2 text-xl 
        font-sans font-medium ${props.todo.isCompleted ? "text-white line-through" : "text-gray-700"}`}>{props.todo.task}</p>
      <div className='w-1/6 flex justify-end items-center mr-2'>
        <button className='bg-red-500 text-white font-bold h-7 w-7 rounded mr-3' aria-label='Delete a ToDo'
          onClick={() => { props.handleDeleteTodo(props.todo.id) }}>X</button>
        <input type="checkbox"
          className='form-checkbox h-7 w-7'
          onChange={() => { props.handleCheckedTodo(props.todo.id) }} />
      </div>
    </div>
  )
}

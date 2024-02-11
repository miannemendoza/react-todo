import React, { ChangeEvent, FormEvent } from 'react'

export type AddTodoProps = {
  task: string
  handleChange: (e: ChangeEvent) => void
  handleSubmitTodo: (e: FormEvent) => void
}

export const AddTodo = (props: AddTodoProps) => {
  return (
    <form className='flex justify-between w-full' onSubmit={props.handleSubmitTodo}>
      <input type="text" name="task"
        className='flex-1 rounded-md shadow p-2 text-gray=dark mr-2  border border-gray-300'
        value={props.task} onChange={props.handleChange} />
      <button type='submit'
        aria-label='Add Todos' className='bg-teal-600 text-white font-bold  rounded mr-3 p-2'>
        Add todo
      </button>
    </form>
  )
}

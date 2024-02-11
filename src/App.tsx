import { useState } from 'react'
import { Todos } from './component/Todos'


function App() {

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-t from-orange-200 to-red-300'>
      <Todos />
    </div>
  )
}

export default App

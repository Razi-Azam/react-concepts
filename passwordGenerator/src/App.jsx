import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-center text-red-950 font-bold text-5xl drop-shadow-sm'>Password Generator</h1>
    </>
  )
}

export default App

import { useState, useCallback } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [passlength, setPassLength] = useState(8)
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowCharacter, setAllowCharacter] = useState(false)

  //create cached form of password generator function using useCallback hook
  const generatePassword = useCallback(() => {
    let pass = " "
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(allowNumber) str += "0123456789"
    if(allowCharacter) str += "~`!@#$%^&*-+_{}[]()"

    for(let i = 1; i <= passlength; i++) {
      let char = Math.floor(Math.random() * str.length + 1 )
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [setPassword, passlength, allowNumber, allowCharacter])

  return (
    <>
    <div className='w-full max-w-md mx-auto py-6 shadow-md rounded-lg px-6 my-12 text-green-300 bg-slate-900'>
      <h1 className=' text-white text-center mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4' >
        <input 
          type='text' value={password}
          className=' outline-none w-full py-1 px-3'
          placeholder='password' readOnly
        />
      </div>
    </div>
    </>
  )
}

export default App

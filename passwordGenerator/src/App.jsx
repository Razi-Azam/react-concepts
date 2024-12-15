import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [passlength, setPassLength] = useState(8)
  const [allowNumber, setAllowNumber] = useState(false)
  const [allowCharacter, setAllowCharacter] = useState(false)
  const [isPasswordAppear, setIsPasswordAppear] = useState(true)

  const passwordRef = useRef(null)

  //create cached form of password generator function using useCallback hook
  const generatePassword = useCallback(() => {
    let pass = " "
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(allowNumber) str += "0123456789"
    if(allowCharacter) str += "~`!@#$%^&*-+_{}[]()"

    for(let i = 1; i <= passlength; i++) {
      let char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [setPassword, passlength, allowNumber, allowCharacter])

  //copy button
  const copyPasswordBtn = useCallback(() => {

    //auto select the password when the copy button is clicked
    passwordRef.current?.select()

    //to select values only a specific range.
    //this will highlight only first 8 password
    passwordRef.current?.setSelectionRange(0, 8)
    
    window.navigator.clipboard.writeText(password)
  }, [password])

  const togglePassword = () => {
      setIsPasswordAppear(!isPasswordAppear)
  }

  useEffect(() => {
    generatePassword()
  }, [passlength, allowNumber, allowCharacter, generatePassword])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto py-6 shadow-md rounded-lg px-6 my-12 text-green-300 bg-slate-900'>
      <h1 className=' text-white text-center mb-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4' >
        <div className=' relative w-full'>
          <input 
            type={`${isPasswordAppear ? "password" : "text"}`} value={password}
            className=' outline-none w-full py-1 pl-2 pr-20 text-slate-950 text-xl'
            placeholder='password' readOnly
            ref = {passwordRef}
          />
          <i id="open-eye-icon"
            onClick={togglePassword}
            className={`${isPasswordAppear ? "fas fa-eye eye-icon fa-eye"  : "fas fa-eye eye-icon fa-eye-slash"} 
              absolute
              top-1/2 right-3 -translate-y-1/2
              cursor-pointer text-xl text-slate-600
              `}
          >
          </i>
        </div>
        <button 
          className='outline-none bg-orange-700 text-white px-3 pb-1 shrink-0'
          onClick={copyPasswordBtn}
        >copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={20}
            value={passlength}
            className='cursor-pointer'
            onChange={(e) => setPassLength(e.target.value)}
          />
          <label className=' accent-orange-700'>Length: {passlength}</label>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={allowNumber}
              id="inputNumber"
              onChange={() => {setAllowNumber((prevNumber) => !prevNumber)}}
            />
            <label htmlFor='inputNumber'>Numbers</label> 
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={allowCharacter}
              id="inputChar"
              onChange={() => {setAllowNumber((prevChar) => !prevChar)}}
            />
            <label htmlFor='inputChar'>Characters</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

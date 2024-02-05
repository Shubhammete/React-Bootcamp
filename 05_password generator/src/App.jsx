import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // states
  const [length, setLength] = useState(8)
  const [numallowed, setNumallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook
  // The useRef hook in React is primarily used for accessing and interacting with DOM elements directly by creating there reference.
  //  Unlike state variables (useState), the value of a useRef persists between renders and does not trigger a re-render when it changes.
  // useRef can also be used to store previous values of props or state, allowing you to compare current and previous values within your component.
  // When working with third-party libraries or imperative APIs that require direct access to DOM elements, useRef can be used to create references to those elements and pass them to the external APIs.
  const passwordRef = useRef(null)

  let generatedPassword = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numallowed) str +="1234567890"
    if(charallowed) str +="!@#$%^&*()_+-=[]{}|;:',.<>/?"

    for(let i = 0; i < length;i++){
      const char = Math.floor(Math.random()*str.length + 1) // here we add one as we can get 0
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,charallowed,numallowed])
  // the value of length, charallowed, or numallowed changes, React will re-create the generatedPassword function to ensure it uses the latest values of these dependencies.
  // so it updates the function to latest values without rerendering

  // useEffect is mainly use to render code with specific condition like mounting or anything
  // here useeffect is used to re-render the when following dependencies change 
  // so here it will work when we change parameters so we can see password in this
  useEffect(()=>{generatedPassword()},[length,charallowed,numallowed])
  // It runs once in every condition so if we pass empty array it will run once


  // function to copy the password
  let copypasswordtoclipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    // select the text
    passwordRef.current.select()
  }
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' >
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      {/* First div for input and copy button*/}
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        {/* input field */}
        <input 
        type='text'
        value={password}
        readOnly
        placeholder='Password'
        // onChange={(e)=>setPassword(e.target.value)}
        className='outline-none w-full py-1 px-3'
        // creating reference of useRef
        ref={passwordRef}
        />

        {/* button */}
        <button
        onClick={copypasswordtoclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          copy
        </button>
      </div>

      {/* second div for setting length */}
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={20}
          value={length}
          onChange={e=>setLength(e.target.value)}
          className='cursor-pointer'
          />
          <label htmlFor='Length' >Length :{length}</label>
        </div>
      

      {/* third div for setting num allowed */}
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          // default value for button
          defaultChecked = {numallowed}
          // here we are using callback to change the previous value so if it true then false and vice versa and avoid direct true and false as callback is depend on prev value
          onChange={()=>setNumallowed(prev=>!prev)}
          className='cursor-pointer'
          />
          <label htmlFor='Number' >Num allowed</label>
        </div>
      </div>

      {/* fourth div for setting num allowed */}
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          // default value for button
          defaultChecked = {charallowed}
          // here we are using callback to change the previous value so if it true then false and vice versa and avoid direct true and false as callback is depend on prev value
          onChange={()=>setCharallowed(prev=>!prev)}
          className='cursor-pointer'
          />
          <label htmlFor='character' >Char allowed</label>
        </div>
      </div>

      </div>
      </div>
    </>
  )
}

export default App

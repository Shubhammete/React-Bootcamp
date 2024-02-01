import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [newcount, setNewcount] = useState(0)
  // arg in useState is the initial value of var i.e. count here
  // useState is use to update the UI after it renders
  // it returns array in which first value is value of variable and other is function in which use to change the variable

  let counter = 0
  const addValue = ()=> {
    // it just prints value in console but not update counter value on UI
    // it is because we any change in DOM state will re-render the webpage
    counter = counter + 1
    console.log(counter)

    // now it will render the value on UI
    if(count>=0){
    setCount(count+1)
    }else{
      setCount(0)
    }
  }

  const reduce = ()=>{
    if(count>0){
      setCount(count-1)
      }else{
        setCount(0)
      }
  }

  const newadd = ()=>{
    // here it will not increment by 4 as react patches the code and in end it sees code and variable arguments are same in method so it add i once
    setNewcount(newcount+1)
    setNewcount(newcount+1)
    setNewcount(newcount+1)
    setNewcount(newcount+1)

    // now we use callback functions passing previous counter values so it depend on the current value and get each state executed
    setNewcount(newcount => newcount+1)
    setNewcount(newcount => newcount+1)
    setNewcount(newcount => newcount+1)
    setNewcount(newcount => newcount+1)
  }
  
  return (
    <>
     <h1>Title: {{/*counter  -> will not increment*/} ,count}</h1>
     <h2>Counter: {count}</h2>
     <button
     onClick={addValue}
     >Increment </button>{" "}
     <button
     onClick={reduce}
     >Decrement</button>
     <p>Footer: {count}</p>

     <h1>Patch:{newcount}</h1>
     <button
     onClick={newadd}
     >newcount</button>
    </>
  )
}

export default App

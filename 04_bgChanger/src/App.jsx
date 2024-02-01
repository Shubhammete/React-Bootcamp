import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState("black")
  const [textcolor, setTextcolor] = useState("white")
   const [daybuttonbg, setDayButtonbg] = useState("bg-white")
   const [nightbuttonbg, setNightButtonbg] = useState("bg-slate-600")

   function setDayButtonbgfxn(){
      if(daybuttonbg === "bg-white"){
        setDayButtonbg("bg-slate-600")
        setNightButtonbg("bg-white")
        setColor("grey")
        setTextcolor("black")
      }
  }
   function setNightButtonbgfxn(){
    if(nightbuttonbg === "bg-white"){
      setDayButtonbg("bg-white")
      setNightButtonbg("bg-slate-600")
      setColor("black")
      setTextcolor("white")
    }
    
  }
  

  return (
    <>
    {/* Main div */}
      <div className="w-full box-border p-0 m-0 h-screen duration-500" style={{backgroundColor:color}}>
        {/* button div */}
        <p className="text-6xl text-center pt-24" style={{color:textcolor}}>
        {color=== "black" ? "Good Night🌝":"Good Morning 🌅"}</p>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-black">
        <button className={`outline-none px-4 py-1 rounded-full text-black shadow-lg ${daybuttonbg}`}
        onClick={setDayButtonbgfxn}
        >Day</button>
        <button className={`outline-none px-4 py-1 rounded-full text-black shadow-lg ${nightbuttonbg}`}
        onClick={setNightButtonbgfxn}
        >Night</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App

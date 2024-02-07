import { useState } from "react"
import {InputBox} from "./components/index.js"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  // states
  const [amount, setAmount] = useState(0)
  const [convertedamount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  // we use this hook to get info about currency
  const currencyInfo = useCurrencyInfo(from)
  // seperate out keys from currencyInfo
  const options = Object.keys(currencyInfo)


  // convert the curreny to desired rate
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to]) 
  }

  // swaping the currencies
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedamount)
  }


  return (
    <>
    {/* Main container */}
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      {/* Outer container of converter */}
      <div className="w-full">
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

        {/* Form  */}
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
           {/* Form for from*/}
          <div className="w-full mb-1">
            <InputBox 
            label = "from"
            amount={amount}
            selectedCurrency={from}
            currenyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            />
          </div>

           {/* Swap button*/}
          <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>

             {/* Form for from*/}
             <div className="w-full mb-1">
            <InputBox 
            label = "to"
            amount={convertedamount}
            selectedCurrency={to}
            currenyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            // onAmountChange={(amount)=>setAmount(amount)}   not needed as we it is read-only
            amountDisabled = {true}
            />
          </div>

         {/* Convert button*/}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>


        </form>
      </div>
      </div>

    </div>
    </>
  )
}

export default App

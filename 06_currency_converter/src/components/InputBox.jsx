import { useId } from "react"


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    classname = ""
}) {
    
    
    // mostly used in generating ids in production grade code
    const id = useId()
  return (
    // main-container
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
      {/* input container  */}
      <div className="w-1-2">

        <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>

        <input 
        id={id} // here id as ref is passed to label htmlFor
        type="input"
        className="outline-none w-full bg-transparent py-1.5"
        placeholder="0"
        disabled={amountDisabled}
        value={amount}
        // here we check first if onAmountChange is there and then typecast it into number as we cant number and not string
        onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>


      {/*currency div */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">

        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectedCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
        >
            {/* loop through currency array hrer we are avoiding using curly braces as it needs to return something*/}
            {
                currenyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))
            }
        </select>
      </div>


    </div>
  )
}

export default InputBox

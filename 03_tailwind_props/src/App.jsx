import './App.css'
import Card from './components/Card'

function App() {
// instead destructuring we can create variable and pass it 
let arr = [2,3,4,6]

  return (
    <>
      <h1 className="text-5xl bg-green-600 p-3">React with Tailwind</h1>
      {/* passing props */}
    <Card name="Shubham"/>
    {/* passing array or object use JS structuring or create variable*/}
    <Card myArr = {[2,3,5]} newArr = {arr} />
    <Card />
    </>
  )
}

export default App

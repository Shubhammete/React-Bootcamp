import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

function App() {
  return(
    <>
    First function component
    </>
  )
}


// const element = {
//   type: "a",
//   link:{
//       href:"https://google.com",
//       target:"_blank"
//           },
//   content:"Google link"
// }
// we cannot create custom react element like this

// here we use React.createElement

const anotherElem = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click for google"
)



//  we can export element not as component but as variable
const Elem = (
  <a href='https:google.com'>click me</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // Elem  
    // renders only element

    // same for custom element
    // anotherElem

    <App />
  // </React.StrictMode>,
)

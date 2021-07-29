import React , {useState} from 'react'
import './App.css'
const App = () => {
  // var val = 'Mamta Leel'
  const [myName , setmyName] = useState('Mamta Leel')
  const changeName = () =>{
    setmyName('Sandeep Singh')
  }
  console.log(myName); 
  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>Click Me </button>
    </div>
  )
}

export default App


import React , {useState} from 'react'
import './App.css'
const App = () => {
  // var val = 'Mamta Leel'
  const [myName , setmyName] = useState('Mamta Leel')
  const changeName = () =>{
    let val = myName; 

    if(val === 'Mamta Leel')
    {
      setmyName('Sandeep singh ')
     }
    else
    {
    setmyName('Mamta Leel')
     }
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


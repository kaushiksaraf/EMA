import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [employId,setEmployId] = useState("")
  const[password,setPassword]=useState("")


  useEffect(()=>{
axios.post("http://localhost:12345/login",{
  employId,
    password,
}).then((res)=> res.json())
.then((data)=> {
  console.log(data)

})


  },[])

  const handlePass=(e)=> {
  setPassword(e.target.value)
  }

  const hanldleEmployId=(e)=> {
    setEmployId(e.target.value)
  }
  const handleSubmit=(e)=> {
    e.preventDefault()
setEmployId(employId);
setPassword(password);

setEmployId("")
setPassword("")

  }

  return (
    <> 
    <div>
      <h2>Login</h2>
     <form action="POST" className='form'>
      <label >Employ Id</label>
      <input type="text" placeholder='enter employ-id' id='employID' onChange={hanldleEmployId}  required/>
      <label >Password</label>
      <input type="text" placeholder='enter password' id="pass" onChange={handlePass}  required/>
      <button onClick={handleSubmit}  >Submit </button>
     </form>
     </div> 
    </>
  )
}

export default App

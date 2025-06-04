import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  // console.log("renderizado del componente");
  const title = 'App hooks';
  const [userName, setUserName] = useState('Pepe');
  // const [lastName, setLastName] = useState('');
  // console.log("userName",userName);
  const [age, setAge] = useState(0);
  console.log("age", age);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleChange = ()=>{
    // setUserName('Juan');
    // setUserName("Pedro");
    // console.log(lastNameRef.current?.value);
    setAge((prev)=>prev+1);
    setAge((prev)=>prev+1);
    setAge((prev)=>prev+1);
    setAge((prev)=>prev+1);
  };

  useEffect(()=>{
    // console.log("useEffect");
    // if(lastNameRef.current?.value === "pepito"){
    //   // setLastName(Math.random().toString());
    // }
  },[lastNameRef])

  const handleFocus = ()=>{
    lastNameRef.current?.focus();
  };

  return (
    <div style={{height:"1200px"}}>
      App
      <button onClick={handleChange} >Cambiar variable de estado</button>
      <button onClick={handleFocus}>Enfocar</button>
      <br/>
      {/* <input type='text' onChange={(e)=>setLastName(e.target.value)} value={lastName}/> */}
      <input type='text' ref={lastNameRef}/>
    </div>
  )
}

export default App

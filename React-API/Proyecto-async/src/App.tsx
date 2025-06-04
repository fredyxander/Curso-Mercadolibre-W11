import './App.css';
import { useEffect, useState } from 'react';

function App() {

  useEffect(()=>{
    const getData = async()=>{
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log("response", response);
        const data = await response.json();
        console.log("data", data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getData();
  },[])

  const handleRequest = async()=>{
    try {
      const response= await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div style={{height:"1200px"}}>
      App
      <button onClick={handleRequest}>Solicitud de datos</button>
    </div>
  )
}

export default App

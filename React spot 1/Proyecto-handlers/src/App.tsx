import { useEffect, useState } from 'react';
import './App.css'
import { Button } from './components/Button/Button'
import { ClickSite } from './components/ClickSite/ClickSite';
import { BackToTopButton } from './components/BackToTopButton/BackToTopButton';

const initialValues = {
  firstname:"",
  lastname:"",
  age:null,
  email:""
};

function App() {
  const [showClickSite, setShowClickSite] = useState(false);
  const [user, setUser] = useState(initialValues);
  const [users, setUsers]=useState([]);
  const usersCount = users.length;

  const resetForm = ()=>{
    setUser(initialValues);
  };

  const handleClick = (event: MouseEvent)=>{
    console.log("evento", event);
    setShowClickSite(!showClickSite);
  };

  return (
    <div style={{height:"1200px"}}>
      App
      <Button text="enviar" onClickHandler={handleClick} />
      {
        showClickSite && <ClickSite/>
      }
      <BackToTopButton/>
    </div>
  )
}

export default App

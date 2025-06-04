import './App.css'
import { Button } from './components/Button/Button'
import { UserDetail } from './components/UserDetail/UserDetail'

function App() {

  const handleGetUsers = (name:string)=>{
    console.log("peticion usuarios")
  }

  return (
    <div style={{height:"1200px"}}>
      App
      <Button text='Enviar' onClickHandler={handleGetUsers}/>
      <UserDetail/>
    </div>
  )
}

export default App

import './App.css'
import { UsersProvider } from './context/UsersContext'
import { ProductsPage } from './pages/ProductsPage/ProductsPage'
import { UsersPage } from './pages/UsersPage/UsersPage'

function App() {

  return (
    <div style={{height:"1200px"}}>
      App
      <UsersProvider>
        <UsersPage/>
      </UsersProvider>
      <hr/>
      <ProductsPage/>
    </div>
  )
}

export default App


import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <nav>Navbar</nav>
     <main>
      <Outlet/>
     </main>
     <footer>Footer</footer>
    </>
  )
}

export default App

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < NavbarComponent/>
    </>
  )
}

export default App

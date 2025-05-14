import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router"
import Home from './pages/Home'
import Crime from './pages/Crime'
import Register from './pages/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all/crime" element={<Crime />} />
        <Route path="/register" element={<Register />} />
       </Routes>
     </Router>
    </>
  )
}

export default App

import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router"
import Home from './pages/Home'
import Crime from './pages/Crime'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all/crime" element={<Crime />} />
       </Routes>
     </Router>
    </>
  )
}

export default App

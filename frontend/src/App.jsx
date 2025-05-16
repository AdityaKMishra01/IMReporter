import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router"
import Home from './pages/Home'
import Crime from './pages/Crime'
import Register from './pages/Register'
import Login from './pages/Login'
import LoginAdmin from './pages/LoginAdmin'
import Signup from './pages/Signup'
import News from './pages/News'
import TrackReports from './pages/TrackReports'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all/crime" element={<Crime />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usersignup" element={<Signup />} />
        <Route path="/news" element={<News />} />
        <Route path="/trackreports" element={<TrackReports />} />
        <Route path="/adminlogin" element={<LoginAdmin />} />

       </Routes>
     </Router>
    </>
  )
}

export default App

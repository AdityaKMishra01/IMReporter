import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Crime from './pages/Crime';
import Register from './pages/Register';
import Login from './pages/Login';
import LoginAdmin from './pages/LoginAdmin';
import Signup from './pages/Signup';
import News from './pages/News';
import AdminUsers from './pages/AdminUsers';
import AdminCrimes from './pages/AdminCrimes';
import TrackReports from './pages/TrackReports';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route - no login required */}
        <Route path="/" element={<Home />} />

        {/* User protected routes */}
        <Route path="/all/crime" element={
          <PrivateRoute allowedRoles={['user','admin']}>
            <Crime />
          </PrivateRoute>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/usersignup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={
          <PrivateRoute allowedRoles={['user','admin']}>
            <News />
          </PrivateRoute>
        } />
        <Route path="/trackreports" element={
          <PrivateRoute allowedRoles={['user','admin']}>
            <TrackReports />
          </PrivateRoute>
        } />

        {/* Admin login page (public) */}
        <Route path="/adminlogin" element={<LoginAdmin />} />

        {/* Admin protected routes */}
        <Route path="/all/crimes" element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminCrimes />
          </PrivateRoute>
        } />
        <Route path="/all/users" element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminUsers />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;

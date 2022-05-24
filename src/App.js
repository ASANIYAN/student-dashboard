import {HashRouter, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './components/contexts/AuthContext';
import Home from './components/landing/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup/Signup';
import Dashboard from './components/user/Dashboard';
import Profile from './components/user/Profile';
function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/landing' element={<Home />} />
          </Routes>
        </div>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;

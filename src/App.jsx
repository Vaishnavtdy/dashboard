import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import User from './pages/User'
import Sidebar from './components/SideBar'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='app' style={{display:'flex'}}>
      <BrowserRouter>
        <Sidebar isOpen={isOpen} />
        <button style={{height:100}} onClick={()=> setIsOpen(!isOpen)}>Click</button>

        <div style={{padding:7}}>
          Home page
        </div>
        {/* <Routes>
          protected route
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
          </Route>

          Public route
          <Route path='/login' element={<Login />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  )
}

export default App

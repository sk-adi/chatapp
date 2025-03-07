import { Profiler, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/contact.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ProtectedRoutes from './routes/ProtectedRoutes.jsx'
import Dashboard from './pages/Dashboard.jsx'
import UserProfile from './pages/UserProfile.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />

      <Route path='/user' element={<ProtectedRoutes />} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='profile' element={<UserProfile/>} />

      </Route>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)

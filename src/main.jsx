import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/auth'>
        <Route path='login' element={<Login/>} />
      </Route>
      <Route path='/' element={<App />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

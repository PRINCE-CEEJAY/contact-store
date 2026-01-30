import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <div className='flex flex-col min-h-screen min-w-screen items-center'>
    <Navbar/>
    <App />
    </div>
  </StrictMode>,
    </BrowserRouter>
)

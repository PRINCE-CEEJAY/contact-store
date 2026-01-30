import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <div className='flex flex-col min-h-screen min-w-screen items-center relative'>
      <Navbar/>
      <App />
      <Footer/>
    </div>
  </StrictMode>,
    </BrowserRouter>
)

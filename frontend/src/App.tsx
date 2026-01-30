import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import AddContact from "./components/AddContact"
import ShowContacts from "./components/ShowContacts"
import Dashboard from "./components/Dashboard"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
export default function App() {
  return (   
    // BrowserRouter already setup in main.tsx
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/auth/login" element = {<Login/>}/>
        <Route path="/auth/register" element = {<Register/>}/>
        <Route path="/add_contact" element = {<AddContact/>}/>
        <Route path="/show_contacts" element = {<ShowContacts/>}/>
      </Routes>     
  )
}

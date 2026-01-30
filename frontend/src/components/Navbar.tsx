import { Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState<boolean>(false);

  function changeMode(){    
    setDark(prev=> !prev)
  }

  return (
    <div className="flex bg-black w-full text-white font-extrabold justify-evenly p-2">
      <div className="flex gap-3">
      <Link to="/" className="cursor-pointer hover:opacity-80" >Home</Link>
      <Link to="/auth/login" className="cursor-pointer hover:opacity-80" >Login</Link>
      <Link to="/auth/register" className="cursor-pointer hover:opacity-80" >Register</Link>   
      <Link to="/dashboard" className="cursor-pointer hover:opacity-80" >Dashboard</Link>   
      <Link to="/add_contact" className="cursor-pointer hover:opacity-80" >Add Contact</Link>   
      <Link to="/show_contacts" className="cursor-pointer hover:opacity-80" >View Contacts</Link>   

      </div>
      <div className="flex space-x-3 cursor-pointer hover:opacity-80" onClick={changeMode}>
        {dark ? <Sun/>: <Moon/>}        
      </div>
    </div>

  )
}

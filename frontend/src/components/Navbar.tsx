import { Contact, HomeIcon, LayoutDashboardIcon, LogInIcon, Moon, NotebookPenIcon, Plus, SeparatorVertical, Sun } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState<boolean>(false);

  function changeMode(){    
    setDark(prev=> !prev)
  }

  return (
    <div className="flex bg-black w-full text-white font-extrabold justify-evenly p-2"> 
      <div className="flex gap-1">
      <HomeIcon/>
      <Link to="/" className="cursor-pointer hover:opacity-80" >Home</Link>
      </div>
      <SeparatorVertical/>  

      <div className="flex gap-6">
        <div className="flex gap-1">
          <LogInIcon/>
          <Link to="/auth/login" className="cursor-pointer hover:opacity-80" >Login</Link>
        </div>

        <div className="flex gap-1">
          <NotebookPenIcon/>
          <Link to="/auth/register" className="cursor-pointer hover:opacity-80" >Register</Link>  
        </div>
      </div>      
      <SeparatorVertical/>

      <div className="flex gap-6">
        <div className="flex gap-1">
          <LayoutDashboardIcon/>
          <Link to="/dashboard" className="cursor-pointer hover:opacity-80" >Dashboard</Link> 
        </div>

        <div className="flex gap-1">
          <Plus/>
          <Link to="/add_contact" className="cursor-pointer hover:opacity-80" >Add Contact</Link>   
        </div>

        <div className="flex gap-1">
          <Contact/>
          <Link to="/show_contacts" className="cursor-pointer hover:opacity-80" >View Contacts</Link>   
        </div>
      </div>
      <SeparatorVertical/>     

      <div className="flex space-x-3 cursor-pointer hover:opacity-80" onClick={changeMode}>
        {dark ? <Sun/>: <Moon/>}        
      </div>
    </div>

  )
}

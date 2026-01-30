import { Contact, HomeIcon, LayoutDashboardIcon, LogInIcon, Moon, NotebookPenIcon, Plus, SeparatorVertical, Sun } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState<boolean>(false);

  function changeMode(){    
    setDark(prev=> !prev)
  }

  const nav = [
    {
    address: '/',
    icon: <HomeIcon/>,
    text: 'Home'
  },
    {
    address: '/auth/login',
    icon: <LogInIcon/>,
    text: 'Login'
  },
    {
    address: '/auth/register',
    icon: <NotebookPenIcon/>,
    text: 'Register'
  },
    {
    address: '/dashboard',
    icon: <LayoutDashboardIcon/>,
    text: 'Dashboard'
  },
    {
    address: '/add_contact',
    icon: <Plus/>,
    text: 'Add Contact'
  },
    {
    address: '/show_contacts',
    icon: <Contact/>,
    text: 'View Contacts'
  },
]

  return (
    <div className="flex bg-black w-full text-white font-extrabold justify-evenly p-2"> 
        {nav.map(({address, icon, text})=>( 
        <div className="flex gap-1">  
          {icon}
          <Link to= {address}>{text}</Link>
        </div>
        ))}
      <SeparatorVertical/>  

      <div className="flex space-x-3 cursor-pointer hover:opacity-80" onClick={changeMode}>
        {dark ? <Sun/>: <Moon/>}        
      </div>
    </div>
  )
}

import React from 'react'
import {Link, Outlet} from "react-router-dom"
export default function Header() {
    
  return (
    <div>
      <nav>
         <Link>Posts</Link>
         <Link>profile</Link>
         <button>LogOut</button>
      </nav>
      <Outlet />
    </div>
  )
}

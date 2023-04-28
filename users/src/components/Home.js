import React, { useState } from 'react'

export default function Home() {
    const [loggedIn,setloggedIn]=useState(false)
  return (
    <div>
      <form>
         <label htmlFor='email'>Email</label>
         <input type="text" />
         <label htmlFor='password'>password</label>
         <input type="password" />
      </form>
    </div>
  )
}

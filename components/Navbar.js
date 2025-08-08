import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-950 text-white items-center px-4 h-16'>
      <div className="font-bold">Buy Me a Coffee</div>

        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>SignOut</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar

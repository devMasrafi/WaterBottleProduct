import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className='sticky top-0 z-50'>
        <div className='container mx-auto flex justify-between text-white  '>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <ul className='flex gap-x-4 '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
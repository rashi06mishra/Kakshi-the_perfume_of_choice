import {logo} from '../assets/images'
import { navLinks} from '../constants'
import { hamburger } from '../assets/icons';
import { useState } from 'react';
// import { GiHamburgerFa } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa6'

const Nav = () => {
  const [open, setOpen] = useState(false);


  return (
    <header className="padding-x py-3  z-20 w-full sticky top-0 shadow-md bg-black shadow-stone-500">
        <nav className='flex justify-between items-center max-container text-yellow-600'>
          {/* logo */}
            <a href="/"
              className='font-montserrat flex justify-center items-center gap-2 text-lg  font-bold '
            >
                <img 
                src={logo} 
                alt="kakshieLogo"
                width={39}
                height={39} />
                KaKshie
            </a>
            {/* primary nav */}
            { <div className= {`lg:block xl:block flex justify-center items-center
              ${
                open?"block":"hidden" 
              }`}>
              <ul className ={`lg:flex-1 lg:flex lg:justify-center lg:items-center justify-center gap-8 pr-8 font-medium `}>
                {navLinks.map( (item) => (
                    <li key={item.label}>
                      <a href={item.href} 
                      className='font-montserrat leading-normal text-lg  '
                      >
                        {item.label}
                      </a>
                    </li>
                    
                ))}
              </ul>

              
            </div>
          }
            {/* secondary nav */}
            <div className= {`lg:block xl:block flex justify-center items-center
              ${
                open?"block":"hidden" 
              }`}>
              <ul className ={`lg:flex-1 lg:flex lg:justify-center lg:items-center justify-center gap-8 pr-8 font-medium `}>
                  <li className='rounded-full border-yellow-500 border-2 px-2'>
                    <a href="/"
                      className='font-montserrat leading-normal text-lg  '
                    >
                      Login
                    </a>
                  </li>
                  <li className='rounded-full border-yellow-500 border-2 px-2'>
                    <a href="/"
                      className='font-montserrat leading-normal text-lg  '
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
            </div>
            {/* mobile menu */}
            <div className='hidden max-lg:block' 
            onClick={() => setOpen(!open)}>
              {/* < GiHamburgerFa /> */}
              <FaBars size={23}/>
              {/* <img src={hamburger} alt="Hamburger" width={25} height={25} /> */}
            </div>
        </nav>
    </header>
  )
}

export default Nav
import React, { useState } from 'react';
import dp from "/images/dp.jpg";
import { TiThMenu } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";
import {Link} from 'react-scroll';
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Portfoilo"
    },
    {
      id: 4,
      text: "Experience"
    },
    {
      id: 5,
      text: "Contacts"
    },
  ];

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 md:shadow fixed top-0 right-0 left-0 bg-gray-200 z-50'>
        <div className='flex justify-between items-center h-16'>
          <div className="flex items-center space-x-2">
            <img src={dp} className='h-12 w-12 rounded-full' alt="" />
            <div>
              <h1 className='font-semibold text-xl cursor-pointer'>
                Anm <span className='text-blue-500 text-xl'>Zahid</span> Hossain
              </h1>
              <p className='text-sm'>Computer Science Student</p>
            </div>
          </div>
          <div>
            <ul className='hidden md:flex space-x-8 items-center'>
              {navItem.map(({ id, text }) => (
                <li className='hover:scale-110 duration-200 font-semibold cursor-pointer' key={id}>
                 <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link></li>
               
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <GiCancel size={25} /> : <TiThMenu size={25} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {
          menu && (
            <div className='md:hidden bg-gray-200'>
              <ul className='flex flex-col items-center justify-evenly space-y-4'>
                {navItem.map(({ id, text }) => (
                  <li className='hover:scale-110 duration-200 font-semibold cursor-pointer' key={id}>
                    <Link
                     onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Navbar;

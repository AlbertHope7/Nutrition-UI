import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/ai'
import { AiFillSchedule } from 'react-icons/ai'
import { AiOutlineWechat } from 'react-icons/ai'
import {GiMeal} from 'react-icons/gi'
import { FaWeight } from 'react-icons/fa'
import {FaPrescriptionBottleAlt} from 'react-icons/fa'
import { BsArrowLeftCircle } from 'react-icons/bs'
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'

const Byose = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
   { title: 'Home', path: '/', src: <AiTwotoneHome /> },
   { title: 'Appointment', path: '/survey', src: <AiFillSchedule /> },
   { title: 'Chat', path: '/chat', src: <AiOutlineWechat /> },
   { title: 'Meal Plan', path: '/meal', src: <GiMeal /> },
   { title: 'Prescription', path: '/prescription', src: <FaPrescriptionBottleAlt /> },
   { title: 'BMI', path: '/bmi', src: <FaWeight />},
 ]
  return (
   <>
      <div
        className={`${
          open ? 'w-60' : 'w-fit'
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            {open && (
              <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                Patient
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Byose;

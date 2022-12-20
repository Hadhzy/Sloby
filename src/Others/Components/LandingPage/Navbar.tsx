import React, { useContext, useState } from 'react'
import { ContentContext } from '../../Context/ContentContext'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
import { close, menu } from '../../../assets'
function Navbar() {
  const { header_categories } = useContext(ContentContext)
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {header_categories?.map((navLink, index: number) => (
          <li
            key={navLink.id}
            className={`font-normal font-poppins cursor-pointer text-[16px] text-white mr-10 ${
              index === header_categories.length - 1 ? `mr-0` : `mr-10`
            }`}
          >
            <a href={`#${navLink.url}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>
      <div>
        <button>
          <a
            href="#"
            type="button"
            className="cursor-pointer ml-10 inline-block rounded-lg bg-blue-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Log in
          </a>
        </button>
        <button>
          <a
            href="#"
            type="button"
            className="cursor-pointer  ml-10 mr-[-40px] inline-block rounded-lg bg-indigo-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-800 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Sign Up
          </a>
        </button>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {header_categories?.map((navLink, index: number) => (
              <li
                key={navLink.id}
                className={`font-normal font-poppins cursor-pointer text-[16px] text-white  ${
                  index === header_categories.length - 1 ? `mr-0` : `mb-4`
                }`}
              >
                <a href={`#${navLink.url}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 right-2 blue__gradient"></div>
      <div className="absolute z-[0] w-[20%] h-[35%] top-0 left-0  pink__gradient"></div>
    </nav>
  )
}

export default Navbar

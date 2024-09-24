import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
const NavLink = () => {
  <LinkScroll>
  {title}
  </LinkScroll>
}
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-10 z-50">
        <div className='container flex h-14 items-center max-lg:px-5'>
          <a className='lg:hidden flex-1 cursor-pointer z-2 '></a>
            <a>
                <img src="/images/xora.svg" alt="dwa" width={115} height={55}/>
            </a>
            <div className="w-full ">
              <nav>
                <ul className='flex max-lg:block max-lg:px-12'>
                  <li className='nav-li'>
                    {/* <NavLink/> */}
                  </li>
                </ul>
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
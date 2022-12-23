// components/layout.js

import Navbar from './navbar'

export default function Layout({ children }) {
    return (
        <div className='bg-back text-white'>
            <Navbar className=''/>
            <Navbar className='invisible !block !static'/>
            <main>{children}</main>
        </div>
    )
}

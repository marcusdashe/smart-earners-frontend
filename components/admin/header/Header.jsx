import Image from 'next/image';
import Link from 'next/link'
import NavAuthBtn from '../../navAuthBtn/NavAuthBtn';
import {useState} from 'react'

const logo = '/onboadinglogo.png';

import {
  Header,
} from "./styles"



export default function Header_({userInfo}) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Header>
        {/* top nave bar */}
        <div className="top-nav-bar">
            {/* logo */}
            <div className="col1 logo">
                 <Link  href='/' passHref>
                    <a><Image width='100' alt='logo' height='100' src={logo}/></a>
                 </Link>
            </div>

             {/* nav link btn */}
             <div className='col3'>
                  <NavAuthBtn setShowMenu={setShowMenu} stick={true} shrink={true} userInfo={userInfo}/>
              </div>
        </div>        
    </Header>
  )
}

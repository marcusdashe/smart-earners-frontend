import Image from 'next/image';
import HomeIcon from '@mui/icons-material/Home';
import NavAuthBtn from '../../navAuthBtn/NavAuthBtn';

const logo = '/onboadinglogo.png';

import {
  Header,
} from "./styles"



export default function Header_({userInfo}) {

  return (
    <Header>
        {/* top nave bar */}
        <div className="top-nav-bar">
            {/* logo */}
            <div className="col1 logo">
                  <a href='/'><Image width='100' height='100' src={logo} alt="" /></a>
            </div>

            {/* home icon */}
            <div className="col1 toggle-menu">
                <a  href='/'  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <HomeIcon />
                </a>
            </div>

             {/* nav link btn */}
             <div className='col3'>
                  <NavAuthBtn stick={true} shrink={true} userInfo={userInfo}/>
              </div>
        </div>        
    </Header>
  )
}

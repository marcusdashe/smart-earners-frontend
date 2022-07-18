import Image from 'next/image'
import Link from 'next/link';
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router';
import { MdClose, MdMenu} from 'react-icons/md';
import { ToggleMenu } from '../../../styles/globalStyle'
import NavAuthBtn from '../../navAuthBtn/NavAuthBtn'
import SideMenu from '../sideMenu/SideMenu';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BalanceIcon from '@mui/icons-material/Balance';
import HelpIcon from '@mui/icons-material/Help';


const logo = '/onboadinglogo.png';
import {
    TopNav,
    MidNav,
} from './styles';

export default function Header_({userInfo}) {
    const [stick, setStick] = useState(false)
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)

    useEffect(()=>{
        window.onscroll=(e)=>{
            window.pageYOffset >= 120 ? setStick(true) : setStick(false)
        }
    }, [])    

    const navLinks =[
        {
            link: 'Home',
            url: '/',
            icon: <HomeIcon />
        },
        {
            link: 'Contact Us',
            url: '/contact-us',
            icon: <PermContactCalendarIcon />
        },
        {
            link: 'How it Works',
            url: '/user-manual',
            icon: <MenuBookIcon />
        },
        {
            link: 'Terms',
            url: '/tc',
            icon: <LocalPoliceIcon />
        },
        {
            link: 'Privacy Policy',
            url: '/policy',
            icon: <BalanceIcon />
        },
        {
            link: 'FAQ',
            url: '/faq',
            icon: <HelpIcon />
        },
    ]

    return (
        <>
            <TopNav>
                {/* toggle menu */}
                {
                    stick ? '' :
                    (
                    <ToggleMenu onClick={()=>setShowMenu(!showMenu)} className="togglemenu-wrapper">
                        {
                            showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                            
                        }
                    </ToggleMenu>
                    )
                }

                {/* logo */}
                {
                    stick ? '' :
                    (
                    <div className="logo">
                        <a href='/' ><Image width='100' height='100' src={logo} alt="" /></a>
                    </div>
                    )
                } 

                {/* signup, signup, logout and dashboard btns*/}

                { stick ? '' : <NavAuthBtn userInfo={userInfo} stick={stick} /> }
                
            </TopNav>

            <MidNav stick={stick}>
                <div className="top-mid-nav">
                    {/* toggle menu */}
                    {
                        !stick ? '' :
                        (
                        <ToggleMenu onClick={()=>setShowMenu(!showMenu)} className="togglemenu-wrapper">
                            {
                                showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                                
                            }
                        </ToggleMenu>
                        )
                    }

                    {/* logo */}
                    {
                        !stick ? '' :
                        (
                        <div className="logo-midNav">
                            <a href='/'><Image width='100' height='100' src={logo} alt="" /></a>
                        </div>
                        )
                    }

                    <div className='navLinkWrapper'>
                        <div className="navLink">
                        {
                            navLinks.map((link, i)=>{
                                return (
                                    <div id='active' key={i}>
                                        <a href={link.url} >
                                           <div className={link.url === router.asPath ? 'active link' : 'link'}>{link.link}</div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    {/* signup, signup, logout and dashboard btns for sticky menu*/}

                    { !stick ? '' : <NavAuthBtn stick={stick} userInfo={userInfo}/> }
                </div>
                
                <div className="bottom-mid-nav" >
                    <marquee behavior="smooth" direction="" style={{fontSize: '.8rem'}}>
                    <span style={{color: 'gold'}}>Hello! </span><span>--- Welcome to SmartEarners Investment. --- </span><span style={{color: 'gold'}}>We Trade it, You Learn & Earn it</span>
                    </marquee>
                </div>
                
            </MidNav>
        
            <SideMenu userInfo={userInfo} navLinks={navLinks} shrink={true} showMenu={showMenu} setShowMenu={setShowMenu} />
        
        </>
    )
}
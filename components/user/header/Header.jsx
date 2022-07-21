import { Header } from "./styles"
import { useRouter } from "next/router";
import Link from 'next/link'
import { useState, useEffect } from "react";
import Image from 'next/image'
import { MdClose, MdMenu} from 'react-icons/md';
import { ToggleMenu } from '../../../styles/globalStyle'
import SideMenu from "../sideMenu/SideMenu";
import { mobileAndTabletCheck } from "../../../utils/mobileAndTabletCheck";
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import NavAuthBtn from "../../navAuthBtn/NavAuthBtn";
import Mobilemenu from "../mobileMenu/Mobilemenu";
import Notifications from "../notifications/Notifications.jsx";

const logo = '/onboadinglogo.png';


export default function Header_({userInfo}) {

    const [stick, setStick] = useState(false)
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [showDropDown, setDropDown] = useState(false)

    useEffect(()=>{
        setIsMobile(mobileAndTabletCheck(window))
        
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
            link: 'Profile',
            url: '/dashboard',
            icon: <PersonIcon />
        },
        {
            link: 'Deposit',
            url: '/dashboard/deposit',
            icon: <SavingsIcon />
        },
        {
            link: 'Investment',
            url: '/dashboard/investment',
            icon: <SavingsIcon />
        },
        {
            link: 'Withdrawals',
            url: '/dashboard/withdrawals',
            icon: <CreditScoreIcon />
        },
        {
            link: 'Transfer',
            url: '/dashboard/transfer',
            icon: <CurrencyExchangeIcon />
        },
        {
            link: 'Transactions',
            url: '/dashboard/transactions',
            icon: <PaidIcon />
        },
        {
            link: 'Referral',
            url: '/dashboard/referrals',
            icon: <PeopleAltIcon />
        }
    ]

    const bottomNavLinks =[
        {
            link: 'Profile',
            url: '/dashboard',
            icon: <PersonIcon />
        },
        {
            link: 'Deposit',
            url: '/dashboard/deposit',
            icon: <SavingsIcon />
        },
        {
            link: 'Investment',
            url: '/dashboard/investment',
            icon: <SavingsIcon />
        },
        {
            link: 'Withdrawals',
            url: '/dashboard/withdrawals',
            icon: <CreditScoreIcon />
        },
        {
            link: 'Transfer',
            url: '/dashboard/transfer',
            icon: <CurrencyExchangeIcon />
        },
        {
            link: 'Transactions',
            url: '/dashboard/transactions',
            icon: <PaidIcon />
        },
        {
            link: 'Referral',
            url: '/dashboard/referrals',
            icon: <PeopleAltIcon />
        }
    ]

  return (
    <Header isMobile={isMobile} stick={stick}>
        {/* account status */}
        
        {/* Check viewing browser */}

        {
            isMobile ?
            (
                // mobile view
                <Mobilemenu alert={true} showNotif={showNotif} setShowNotif={setShowNotif} userInfo={userInfo} bottomNavLinks={bottomNavLinks} showDropDown={showDropDown} setDropDown={setDropDown}/>
            ):
            (
                // Desktop view
                <>
                    <div className="larger-screen-view">
                        {/* logo */}
                        <div className="col1 logo">
                            <Link href='/' passHref>
                                <a><Image width='100' height='100' src={logo} alt="" /></a>
                            </Link>
                        </div>

                        {/* nav links */}
                        <div className="col2">
                            <div className="navLink">
                            {
                                navLinks.map((link, i)=>{
                                    return (
                                        <div className="navLinkWrapper" key={i}>
                                            <Link  href={link.url} passHref>
                                                <a>
                                                    <div className={link.url === router.asPath ? 'active link' : 'link'}>{link.link}</div>
                                                </a>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>

                        {/* nav link btn */}
                        <div className='col3'>
                            <NavAuthBtn stick={true} setShowMenu={setShowMenu} userInfo={userInfo}/>
                        </div>

                        <Notifications showNotif={showNotif} alert={true} setDropDown={setDropDown} showDropDown={showDropDown} setShowNotif={setShowNotif}/>
                    </div>
                    

                    {/* View on Window resized to max of 920px */}
                    <div className="smaller-screen-view">
                        {/* toggle menu */}
                        <div className="col1 toggle-menu">
                            <ToggleMenu onClick={()=>setShowMenu(!showMenu)} className="togglemenu-wrapper">
                                {
                                    showMenu ? <MdClose className='togglemenu'/> : <MdMenu className='togglemenu'/>
                                }
                            </ToggleMenu>
                        </div>

                        {/* logo */}
                        <div className="col2 logo">
                            <Link  href='/'  passHref>
                                <a><Image width='100' height='100' src={logo} alt="" /></a>
                            </Link>
                        </div>

                        {/* auth btn */}
                        <div className='col3'>
                            <NavAuthBtn stick={false} setShowMenu={setShowMenu} userInfo={userInfo}/>
                        </div>

                        <Notifications showNotif={showNotif} alert={true} setDropDown={setDropDown} showDropDown={showDropDown} setShowNotif={setShowNotif}/>
                    </div>

                    <SideMenu shrink={true} userInfo={userInfo} navLinks={navLinks} showMenu={showMenu} setShowMenu={setShowMenu} />
                </>
            )
        }

    </Header>
  )
}

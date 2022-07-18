import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavAuthBtn from "../../navAuthBtn/NavAuthBtn";
import { MobileMenu_ } from './styles';
const logo = '/onboadinglogo.png';
import Notifications from '../notifications/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';


export default function Mobilemenu({bottomNavLinks, userInfo, alert, showNotif, setShowNotif, setDropDown, showDropDown}) {

    const close =()=>{
        setDropDown(!showDropDown)
        setShowNotif(false)
    }

    const router = useRouter()
    return (
        <MobileMenu_>
            {/* header nav*/}
            <div className="mobile-screen-view">
                
                {/* logo */}
                <div className="col2 logo">
                    <a href='/'><Image width='100' height='100' src={logo} alt="" /></a>
                </div>

                {/* home icon */}
                <div className="col1 toggle-menu">
                    <a  href='/'  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <HomeIcon />
                    </a>
                </div>


                {/* current page name */}
                <div className='col3'>
                    <MoreVertIcon className='dropDownBtn' onClick={close}/>
                    {showDropDown ? (
                        <div className="sideNav">
                            <NavAuthBtn shrink={true} portriat={true} stick={true}  setShowMenu={false} userInfo={userInfo}/>
                        </div>
                    ) : ''}
                    
                </div>

                <Notifications showNotif={showNotif} alert={true} setDropDown={setDropDown} setShowNotif={setShowNotif}/>
            </div>

            {/* bottom nav */}
            <div className="bottom-nav">
                {
                    bottomNavLinks.map((link, i)=>{
                        return (
                            <div key={i}>
                                <a href={link.url} className="linkWrapper">
                                    <div className={link.url === router.asPath ? 'active-icon link-icon' : 'link-icon'}>
                                        {link.icon}
                                    </div>
                                    <div className={link.url === router.asPath ? 'active-link link' : 'link bottom-link'}>
                                        {link.link}
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </MobileMenu_>
    )
}

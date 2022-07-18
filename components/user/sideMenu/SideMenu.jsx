import SideMenuModal from "../../modals/sideMenuModal/SideMenuModal";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/router";
import { CopyRight } from "../../../styles/globalStyle";
const logo = '/onboadinglogo.png';
import NavAuthBtn from "../../navAuthBtn/NavAuthBtn";

import {
    SideMenuRow1,
    SideMenuRow2,
    SideMenuRow3,
    
} from './styles'


export default function SideMenu({navLinks, shrink, userInfo, showMenu, setShowMenu}) {
    const router = useRouter()
    
    return (
        <>
            <SideMenuModal showMenu={showMenu} setShowMenu={setShowMenu}>
                <div className="content">
                    <SideMenuRow1>
                        <div className="logo">
                            <a href='/'><Image width='100' height='100' src={logo} alt="" /></a>
                        </div>
                    </SideMenuRow1>

                    <SideMenuRow2>
                        <div className="navLink">
                        {
                            navLinks.map((link, i)=>{
                                return (
                                    <div key={i}>
                                        <Link href={link.url} passHref>
                                            <a>
                                                <div className={link.url === router.asPath ? 'side-menu-active-icon icon' : 'icon'}>
                                                    {link.icon}
                                                </div>
                                                <div className={link.url === router.asPath ? 'side-menu-active-link link' : 'link'}>
                                                    {link.link}
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </SideMenuRow2>

                    <SideMenuRow3>
                        <div style={{color: '#fff', background: 'gild'}} className="nav">
                            <NavAuthBtn userInfo={userInfo} setShowMenu={setShowMenu} shrink={true}/>
                        </div>
                        <CopyRight className="copyright">
                            &copy; {new Date().getFullYear() > 2022 ? '2021 - ' + new Date().getFullYear() : 2022} Smart Earners
                        </CopyRight>
                    </SideMenuRow3>
                </div>
            </SideMenuModal>
        </>
    )
}
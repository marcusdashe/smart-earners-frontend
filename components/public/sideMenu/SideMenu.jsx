import SideMenuModal from "../../modals/sideMenuModal/SideMenuModal";
import Image from "next/image";
import { useRouter } from "next/router";
import NavAuthBtn from "../../navAuthBtn/NavAuthBtn";
import { CopyRight } from "../../../styles/globalStyle";
const logo = '/onboadinglogo.png';
import {
    SideMenuRow1,
    SideMenuRow2,
    SideMenuRow3,
    
} from './styles'




export default function SideMenu({navLinks, userInfo={userInfo}, showMenu, setShowMenu}) {
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
                                    <a href={link.url} >
                                        <div className={link.url === router.asPath ? 'side-menu-active-icon icon' : 'icon'}>
                                            {link.icon}
                                        </div>
                                        <div className={link.url === router.asPath ? 'side-menu-active-link link' : 'link'}>
                                            {link.link}
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                    </div>
                </SideMenuRow2>

                <SideMenuRow3>
                    <div style={{color: '#fff'}} className="nav">
                        <NavAuthBtn shrink={true} userInfo={userInfo} />
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

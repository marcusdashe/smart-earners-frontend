import React from 'react'
import { NavBtn } from './styles'
import {useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import { logout } from '../../redux/auth/auth.js'
import Link from 'next/link'


export default function NavAuthBtn({ userInfo, stick, shrink, setShowMenu, portriat}) {
    const dispatch = useDispatch();
    const router = useRouter();
    const path = router.pathname;
    
    const handleLogout =()=>{
        dispatch(logout());
        setShowMenu(false)
        setTimeout(()=>{
            router.push('/');
        }, 500)
    }
    return (
        <NavBtn shrink={shrink} stick={stick} portriat={portriat}>
        {
            userInfo.refreshtoken ? 
            (
                (function(){
                    if(path.includes('dashboard')){
                        // check if user is admin
                        if(userInfo.type ==='admin'){
                            return (
                                <>
                                    <Link href='/admin' passHref>
                                        <a onClick={()=>setShowMenu(false)} className='nav-btn admin'>Admin</a>
                                    </Link>
                                    <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                                </>
                            )
                        }else{
                            return (
                                <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                            )
                        }
                    }
                    else if(path.includes('admin')){
                        return (
                            <>
                                 <Link  href='/dashboard'  passHref>
                                    <a onClick={()=>setShowMenu(false)} className='nav-btn dashboard'>Dashboard</a>
                                 </Link>
                                <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                            </>
                        )
                    }
                    else{
                        // check if user is admin
                        if(userInfo.type ==='admin'){
                            return (
                                <>
                                    <Link  href='/dashboard'  passHref>
                                        <a onClick={()=>setShowMenu(false)} className='nav-btn dashboard'>Dashboard</a>
                                    </Link>
                                    <Link href='/admin' passHref>
                                        <a onClick={()=>setShowMenu(false)} className='nav-btn admin'>Admin</a>
                                    </Link>
                                    <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                                </>
                            )
                        }else{
                            return (
                                <>
                                    <Link  href='/dashboard'  passHref>
                                        <a onClick={()=>setShowMenu(false)} className='nav-btn dashboard'>Dashboard</a>
                                    </Link>
                                    <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                                </>
                            )
                        }
                    }
                    
                }())                
            ):
            (
                <>
                    <Link href='/signup' assHref>
                        <a onClick={()=>setShowMenu(false)} className={router.asPath === '/signup' ? 'nav-btn signup active' : 'nav-btn signup'}>Sign Up</a>
                    </Link>
                    <Link href='/signin' assHref>
                        <a onClick={()=>setShowMenu(false)} className={router.asPath === '/signin' ? 'nav-btn signup active' : 'nav-btn signup'}>Sign in</a>
                    </Link>
                    
                    
                </>
            )
        }
        </NavBtn>
  )
}

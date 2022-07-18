import React from 'react'
import { NavBtn } from './styles'
import {useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import { logout } from '../../redux/auth/auth.js'


export default function NavAuthBtn({ userInfo, stick, shrink, portriat}) {
    const dispatch = useDispatch();
    const router = useRouter();
    const path = router.pathname;
    
    const handleLogout =()=>{
        dispatch(logout());

        setTimeout(()=>{
            location.href = '/';
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
                                    <a href='/admin' className='nav-btn admin'>Admin</a>
                                    <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                                </>
                            )
                        }else{
                            return (
                                <a href='/' onClick={handleLogout} className='nav-btn logout' >Logout</a>
                            )
                        }
                    }
                    else if(path.includes('admin')){
                        return (
                            <>
                                 <a href='/dashboard' className='nav-btn dashboard'>Dashboard</a>
                                <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                            </>
                        )
                    }
                    else{
                        // check if user is admin
                        if(userInfo.type ==='admin'){
                            return (
                                <>
                                    <a href='/dashboard' className='nav-btn dashboard'>Dashboard</a>
                                    <a href='/admin' className='nav-btn admin'>Admin</a>
                                    <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                                </>
                            )
                        }else{
                            return (
                                <>
                                    <a href='/dashboard' className='nav-btn dashboard'>Dashboard</a>
                                    <a onClick={handleLogout} className='nav-btn logout' >Logout</a>
                                </>
                            )
                        }
                    }
                    
                }())                
            ):
            (
                <>
                    <a href='/signup' className='nav-btn signup'>Sign Up</a>
                    <a href='/signin' className='nav-btn signin'>Sign in</a>
                </>
            )
        }
        </NavBtn>
  )
}

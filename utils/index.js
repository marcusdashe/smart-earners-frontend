import Cookies from 'js-cookie';


const check = {

    redirectIfNotLoggedIn: (location, url)=>{
        if(Cookies.get('accesstoken') === undefined) router.push(url)
    },
    
    redirectIfNotAdmin: (location, url)=>{
        if(Cookies.get('accesstoken') !== undefined && Cookies.get('type') !== 'admin') router.push(url)
    },

    redirectToDashboard: (location, user_info, dashboard, admin)=>{
        user_info.refreshtoken && user_info.type==='admin' ? location.href = '/admin' : location.href = '/dashboard'
    },


    isLoggedIn: ()=>{  
        if(Cookies.get('accesstoken') === undefined) return false        
    },
    

    isAdmin: ()=>{
        if(Cookies.get('accesstoken') !== undefined && Cookies.get('type') === 'admin') return true
    },

    isUnverified: ()=>{
        if(Cookies.get('accesstoken') !== undefined && Cookies.get('type') === 'unverified') return true
    },

    isVerified: ()=>{
        if(Cookies.get('accesstoken') !== undefined && Cookies.get('type') === 'verified') return true
    },

    isBlocked: ()=>{
        if(Cookies.get('accesstoken') !== undefined && Cookies.get('type') === 'blocked') return true
    },
}

export default check
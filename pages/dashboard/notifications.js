import React from 'react'
import Notifications from '../../components/user/notifications/Notifications';

export default function notifications({userInfo}) {
  return <Notifications userInfo={userInfo} />
}


// handle redirect if user sign up
export function getServerSideProps(context){
    const cookies = context.req.cookies;
    const refreshtoken = cookies.refreshtoken;
  
    if(!refreshtoken){
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
        props: {}
      }
    }else{
      return {
        props: {}
      }
    }
  }
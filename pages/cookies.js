import React from 'react'
import Cookies from '../components/public/cookies/cookies'

export default function cookies({userInfo}) {
  return <Cookies userInfo={userInfo}/>
}

// handle redirect if user sign up,
export const getServerSideProps =(context)=>{
  const cookies = context.req.cookies;
  const refreshtoken = cookies.refreshtoken;

  if(!refreshtoken){
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }else{
    return {
      props: {}
    }
  }
}
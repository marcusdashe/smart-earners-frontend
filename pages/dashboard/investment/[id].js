import React from 'react';
import {useRouter} from 'next/router'

export default function () {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>investment for {id}</div>
    )
}


// handle redirect if user sign in
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
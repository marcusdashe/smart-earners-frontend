import React from 'react'

export default function index() {
  return (
    <div>Investment</div>
  )
}

// handle redirect if user sign in page
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

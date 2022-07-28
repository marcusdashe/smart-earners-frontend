import WebConfig_ from "../../components/admin/webConfig/WebConfig";

export default function WebConfig() {
  return <WebConfig_ />
}


// handle redirect if user sign in
export function getServerSideProps(context){
    const cookies = context.req.cookies;
    const refreshtoken = cookies.refreshtoken;
    const type = cookies.type;
  
    if(!refreshtoken){
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
        props: {}
      }
    }
    else if(refreshtoken && type !=='admin'){
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
        props: {}
      }
    }
    else{
      return {
        props: {}
      }
    }
  }
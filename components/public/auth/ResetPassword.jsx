import styled from  'styled-components';
import {useState, useEffect} from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../../redux/auth/auth';
import { useRouter } from 'next/router';
import { RiCloseLine} from 'react-icons/ri'
import check from "../../../utils";
import Cookies from 'js-cookie'

const gif1 = '/gif/1.gif';
const gif2 = '/gif/3.gif';
import {
  Error,
  Success,
  Close
} from "./styles/auth";


const VerifyWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .img {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    color: var(--bright-color)
  }

  .msg {
    margin: 20px 0;
  }
`

export default function ResetPassword() {
  const router = useRouter()
  const [isLoading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch()
  const state = useSelector(state=>state)
  const {resetPassword} = state.auth;

  const {token} = router.query;

  const [feedback, setFeedback] = useState({
    msg: resetPassword.msg,
    status: false
  });

  useEffect(()=>{
    dispatch(resetPassword(token))

  }, [])

  useEffect(()=>{

    setFeedback({
      msg: resetPassword.msg,
      status: true
    });


    setTimeout(()=>{
        setLoading(false);
    }, 4000);

    if(resetPassword.status && !isLoading){
        setSuccess(true);

        // redirect user after a successful verification (hasLoaded is true) to the required dashboard (either user or admin dashboard)
    
        const user_info = {
            refreshtoken: Cookies.get('refreshtoken'),
            type: Cookies.get('type')
        };
  
        success ? check.redirectToDashboard(location, user_info, '/dashboard', '/admin') : '' ;
    } 

  }, [resetPassword.status])


  // handle close feedback msg
  const handleClose =()=>{
      setFeedback({
          msg: '',
          status: false
      })
  }

  return (
    <VerifyWrapper>
      <h1 style={{margin: '10px 0'}} className="title">SmartEarners' <span>Invesement</span></h1>
      <h3 className="subTitle">We Trade it, You Learn & Earn it</h3>
  
      <div className="msg">
        
        {
          (function(){

              if(!isLoading){
                if(feedback.status){
                  if(resetPassword.msg){
                    if(resetPassword.status){
                      return (
                        <Success>
                          <Close onClick={handleClose}>
                              <RiCloseLine />
                          </Close>
                          {resetPassword.msg}
                      </Success>
                      )
                    }{
                      return (
                        <Error>
                          <Close onClick={handleClose}>
                              <RiCloseLine />
                          </Close>
                          {resetPassword.msg}
                      </Error>
                      )
                    }
                  }
                  else{
                    return ''
                  }
                }
                else{
                  return ''
                }
              }
              else{
                return ''
              }

          }())
        }

      </div>
      

      <div className="img">

        {
          (function(){

            if(isLoading){
              return (
                <div className="img">
                  <Image src={gif2} width='100' height='100'/>
                </div>
              )
            }

          }())
        }

      </div>
    </VerifyWrapper>
  )
}

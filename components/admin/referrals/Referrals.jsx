// import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { AdminWrapper } from "./styles";
import Loader_ from "../loader/Loader";



export default function Referrals({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  // const {referral} = state.aReferral;

  useEffect(()=>{
    setLoading(true)
    // dispatch(getUser())

    setTimeout(()=>{
    //   user.isLoading ? setLoading(true) : setLoading(false)
        setLoading(false)
    }, 1000)
  }, [])

  const referral = {
    data: ''
  }

  return (
    
    //check if referral exist

    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty

      !referral.data ? 
      (
          <div style={{textAlign: 'center'}}>No Data Currently Available</div>
      ):
      (
        <AdminWrapper>
          display data here
        </AdminWrapper>
      )
    )    
  )
}

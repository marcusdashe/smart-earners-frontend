import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { UserWrapper } from "./styles";
import Loader_ from "../loader/Loader";
import DashboardHeader from "../DashboardHeader.jsx";



export default function Index({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {user} = state.auth;

  useEffect(()=>{
    setLoading(true)
    dispatch(getUser())

    setTimeout(()=>{
      user.isLoading ? setLoading(true) : setLoading(false)
    }, 1000)
  })



  return (
    
    //check if user exist

    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty

      !user.data ? 
      (
          <div style={{textAlign: 'center'}}>No Data Currently Available</div>
      ):
      (
        <UserWrapper>
          <DashboardHeader />
          display data here
        </UserWrapper>
      )
    )    
  )
}

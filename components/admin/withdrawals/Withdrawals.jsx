// import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { AdminWrapper } from "./styles";
import Loader_ from "../loader/Loader";



export default function Withdrawals({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  // const {withdrawals} = state.aWithdrawals;

  useEffect(()=>{
    setLoading(true)
    // dispatch(getUser())

    setTimeout(()=>{
    //   user.isLoading ? setLoading(true) : setLoading(false)
        setLoading(false)
    }, 1000)
  }, [])

  const withdrawals = {
    data: ''
  }

  return (
    
    //check if withdrawals exist

    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty

      !withdrawals.data ? 
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

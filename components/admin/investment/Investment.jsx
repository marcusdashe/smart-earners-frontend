// import { getUser } from "../../../redux/auth/auth";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { AdminWrapper } from "./styles";
import Loader_ from "../loader/Loader";



export default function Investment({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  // const {investment} = state.aInvestment;

  useEffect(()=>{
    setLoading(true)
    // dispatch(getUser())

    setTimeout(()=>{
    //   user.isLoading ? setLoading(true) : setLoading(false)
        setLoading(false)
    }, 1000)
  }, [])

  const investment = {
    data: ''
  }

  return (
    
    //check if investment exist

    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty

      !investment.data ? 
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

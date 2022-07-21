import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getConfig} from "../../../redux/admin/config";
import WithdrawalForm from './WithdrawalForm.jsx'
import InvestmentForm from './InvestmentForm.jsx'
import GeneralConfigForm from './GeneralConfigForm.jsx'

import {
  AdminWrapper,
} from "./styles";



export default function Config({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {config} = state.config;


  useEffect(()=>{
    setLoading(true)
    dispatch(getConfig())

    setTimeout(()=>{
      config.isLoading ? setLoading(true) : setLoading(false)
    }, 1000)

  }, [])


  return (
    
    //check if config exist
    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty

      !config.status ? 
      (
          <div style={{textAlign: 'center'}}>No Data Currently Available</div>
      ):
      (
        <AdminWrapper>
          <GeneralConfigForm config={config}/>
          <WithdrawalForm config={config}/>
          <InvestmentForm config={config}/>
        </AdminWrapper>
      )
    )    
  )
}

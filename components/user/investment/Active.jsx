import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getTxn } from "../../../redux/invest/invest";

export default function Active() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    // const {invest} = state.invest

    return (
        <div>Active</div>
    )
}


const Summary = ()=>{

    return (
      <Sum className="none">You do not have active investment at the moment. Please choose a plan to begin now!</Sum>
    )
  }

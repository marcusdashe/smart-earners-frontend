import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

export default function Mature() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    // const {invest} = state.invest
    
    return (
        <div>Mature</div>
    )
}

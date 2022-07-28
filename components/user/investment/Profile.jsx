import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getUser } from "../../../redux/auth/auth";
import styled from 'styled-components'
import {useSnap} from '@mozeyinedu/hooks-lab'


export default function Profile({setShowActive}) {
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    const {user} = state.auth;
    const {snap} = useSnap(.5)

    useEffect(()=>{
        dispatch(getUser())
    }, [])

    const handleActive=()=>{
        setShowActive(true)
    }
    const handleMatured=()=>{
        setShowActive(false)
    }

    return (
        <Profile_>
            <h3 className="name">Hello {user.data.username},</h3>
            <div>Invest and Earn with Us</div>

            <div className="wrapper">
                <div className="content">
                    <div style={{textAlign: 'center'}}>Available Balance</div>
                    <div style={{textAlign: 'center', padding: '10px'}}>
                        <span style={{fontWeight: 'bold', }}>{user.data.amount && user.data.amount.toFixed(2)} {user.data.currency}</span>
                    </div>

                    <div className="btn">
                        <button onClick={handleActive} {...snap()}>Active</button>
                        <button onClick={handleMatured} {...snap()}>Matured</button>
                    </div>
                </div>
            </div>
        </Profile_>
    )
}


const Profile_ = styled.div`
    width: 100%;
    padding: 10px 20px; 

    .wrapper{
        width: 98%;
        max-width: 500px;
        margin: 20px auto 0 auto;
        padding: 10px;
        border-bottom: 1px solid #aaa;
        border-top: 1px solid #aaa;

    }
    
    .content{
        width: 100%;
        padding: 5px;
        background: #fff;
        box-shadow: 0px 2px 3px 0px #aaa, -1px -2px 3px 0px #aaa;
    }
    .btn{
        display: flex;
        justify-content: space-around;
        padding: 0px;

        button{
            padding: 8px;
            width: 100px;
            margin: 5px;
            border: none;
            color: #fff;
            cursor: pointer;

            &:hover{
                opacity: .4;
            }

            &:focus{
                outline: none;
            }

            &:nth-child(1){
                background: var(--major-color-purest);
            }

            &:nth-child(2){
                background: #6babc9
            }
        }
    }
`

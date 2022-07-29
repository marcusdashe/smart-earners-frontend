import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab';
import Link from 'next/link';
import { useRouter } from "next/router";
import { getWithdrawals, handleConfirm, handleRejected } from "../../../redux/admin/withdrawals";

import {
  AdminWrapper,
  Form,
  InputWrapper,
  Container,
  Input,
  Header,
  Title,
  Label
} from "../styles";

export default function Transactions() {
  const router = useRouter()
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const {withdrawals} = state.withdrawals
  console.log(withdrawals)

  useEffect(()=>{
    dispatch(getWithdrawals())
  })


  return (
    <div>
      <Header>
          <Link href='/admin/withdrawals' passHref>
            <a className={router.asPath === '/admin/withdrawals' ? 'active' : ''}>Config</a>
          </Link>
          <Link href='/admin/withdrawals/transactions' passHref>
            <a className={router.asPath === '/admin/withdrawals/transactions' ? 'active' : ''}>Transactions</a>
          </Link>
      </Header>

      <AdminWrapper>
       
      </AdminWrapper>
    </div>
  )
}

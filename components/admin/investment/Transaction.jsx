import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab';
import Link from 'next/link';
import { useRouter } from "next/router";

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

export default function Transaction() {
  const router = useRouter()
  return (
    <div>
      <Header>
          <Link href='/admin/investment' passHref>
            <a className={router.asPath === '/admin/investment' ? 'active' : ''}>Config</a>
          </Link>
          <Link href='/admin/investment/transactions' passHref>
            <a className={router.asPath === '/admin/investment/transactions' ? 'active' : ''}>Transactions</a>
          </Link>
          <Link href='/admin/investment/plans' passHref>
            <a className={router.asPath === '/admin/investment/plans' ? 'active' : ''}>Plans</a>
          </Link>
      </Header>

      <AdminWrapper>
       here
      </AdminWrapper>
    </div>
  )
}

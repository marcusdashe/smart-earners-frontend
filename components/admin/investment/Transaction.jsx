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
import GoBackBtn from "../../GoBackBtn";

export default function Transaction() {
  const router = useRouter()
  return (
    <div>
      <Header>
          <GoBackBtn />
      </Header>

      <AdminWrapper>
       here
      </AdminWrapper>
    </div>
  )
}

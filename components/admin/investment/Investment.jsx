import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getConfig, updateConfig} from "../../../redux/admin/web_config";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab';
import Link from 'next/link';

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
import { useRouter } from "next/router";

export default function Investment() {
  const router = useRouter()
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {config} = state.config;

  const initialState = {  
    masterPlanAmountLimit: config.data.masterPlanAmountLimit,
    investmentLimits: config.data.investmentLimits,
}


  useEffect(()=>{
    setLoading(true)
    dispatch(getConfig())

    setTimeout(()=>{
      config.isLoading ? setLoading(true) : setLoading(false)
    }, 1000)

  }, [])

  return (
    <>
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

    {
      isLoading ? 
      (
        // set loading div
        <Loader_ />
      ) :
      (
        //check if empty
  
        !config.data ? 
        (
            <div style={{textAlign: 'center'}}>{config.msg || 'No data currently available'}</div>
        ):
        (
          <AdminWrapper>
            <SetForm config={config} initialState={initialState}/>
          </AdminWrapper>
        )
      )
    }
    </>
       
  )
}





function SetForm({config, initialState}) {
    const {snap} = useSnap(.5);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch()
    const router = useRouter()
  
    
    const [inp, setInp] = useState(initialState)
  
  
    const getInput=(e)=>{
      const {name, value} = e.target;
      setInp({...inp, [name]:value})
    }

    const submit=(e)=>{
        e.preventDefault();
        dispatch(updateConfig(inp));
        
        setInp(initialState);
    }

    useEffect(()=>{
      setInp(initialState);
    }, [config])
  
    return (
      <div>
        <Form>
            <Container>

                <div {...snap()} onClick={()=>setEdit(!edit)} className="title">
                    <span  style={{fontSize: '1rem'}}>Investment</span>
                    <span className="edit">
                        <EditIcon />
                    </span>
                </div>

                {
                    edit ?
                    (
                        <button onClick={submit} className="btn">Submit</button>
                    ): ''
                }

                <InputWrapper title="Mininmum amount for Master Plan">
                      <Label htmlFor="">Master Plan Mininum Amount: <span className="item">{config.data.masterPlanAmountLimit} {config.data.nativeCurrency}</span></Label>
                      <Input
                        disabled={!edit}
                        type="number"
                        value={inp.masterPlanAmountLimit || ''}
                        name='masterPlanAmountLimit'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Max active investment per user">
                      <Label htmlFor="">Max Active Investment: <span className="item">{config.data.investmentLimits}</span></Label>
                      <Input
                        disabled={!edit}
                        type="number"
                        value={inp.investmentLimits || ''}
                        name='investmentLimits'
                        onChange={getInput}
                      />
                  </InputWrapper>

            </Container>
        </Form>
      </div>
    )
}

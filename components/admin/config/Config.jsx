import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getConfig} from "../../../redux/admin/config";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab'

import {
  AdminWrapper,
  Form,
  InputWrapper,
  Container
} from "./styles";



export default function Config({userInfo}) {
  const {snap} = useSnap(.5)
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const [edit, setEdit] = useState(true)
  const {config} = state.config;

  const [inp, setInp] = useState({
    customerSupport: '',
    verifyEmail: '',
    allowTransfer: '',
    unverifyUserLifeSpan: '',
    name: '',
    conversionRate: '',
    nativeCurrency: '',
    tradeCurrency: '',

    masterPlanAmountLimit: '',
    investmentLimits: '',

    maxWithdrawalLimit: '',
    minWithdrawalLimit: '',
    withdrawalCoins: '',
    withdrawalCommonDiff: '',

  })


  const getInput=(e)=>{
    const {name, value} = e.target;
    setInp({...inp, [name]:value})
  }



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
          <div {...snap()} onClick={()=>setEdit(!edit)} className="edit">
            <EditIcon />
          </div>
            <Form>
                <Container>
                  <div className="title">General Config</div>
                  <InputWrapper title="App Name">
                      <label htmlFor="">Name: <span className="item">{config.data.name}</span></label>
                      <input
                        disabled={!edit}
                        type="text"
                        value={inp.name || ''}
                        name='name'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Allow users to have access to the customer support system">
                      <label htmlFor="">Allow Custumer Support?: <span className="item">{config.data.customerSupport}</span></label>
                      <input
                        disabled={!edit}
                        type="text"
                        value={inp.customerSupport || ''}
                        name='customerSupport'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Users wont be sent email for verifcation and during password reset, this will be done directly">
                      <label htmlFor="">Allow Email Verification?: <span className="item">{config.data.verifyEmail}</span></label>
                      <input
                        disabled={!edit}
                        type="text"
                        value={inp.verifyEmail || ''}
                        name='verifyEmail'
                        onChange={getInput}
                      />
                  </InputWrapper>


                  <InputWrapper title="Number of time in seconds unverifed users are allowed to stay in the database. 0 means they stay forever">
                      <label htmlFor="">Unverified Users' Lifespan: <span className="item">{config.data.unverifyUserLifeSpan}</span></label>
                      <input
                        disabled={!edit}
                        type="number"
                        min={0}
                        value={inp.unverifyUserLifeSpan || ''}
                        name='unverifyUserLifeSpan'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Native currency of the app">
                      <label htmlFor="">Native Currency: <span className="item">{config.data.nativeCurrency}</span></label>
                      <input
                        disabled={!edit}
                        type="text"
                        value={inp.nativeCurrency || ''}
                        name='nativeCurrency'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Exchange currency of the app" >
                      <label htmlFor="">Trade Currency: <span className="item">{config.data.tradeCurrency}</span></label>
                      <input
                        disabled={!edit}
                        type="text"
                        value={inp.tradeCurrency || ''}
                        name='tradeCurrency'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Whatever the value is (in the native currency), is equivalent to 1 of the trade currency" >
                      <label htmlFor="">Conversion Rate: <span className="item">{config.data.conversionRate} -- (1 { config.data.tradeCurrency} = {config.data.conversionRate} {config.data.nativeCurrency})</span></label>
                      <input
                        disabled={!edit}
                        type="number"
                        value={inp.conversionRate || ''}
                        name='conversionRate'
                        onChange={getInput}
                      />
                  </InputWrapper>
                 
                </Container>

                <Container>

                  <div className="title">Investment</div>
                  <InputWrapper title="Mininmum amount for Master Plan">
                      <label htmlFor="">Master Plan Mininum Amount: <span className="item">{config.data.masterPlanAmountLimit} {config.data.nativeCurrency}</span></label>
                      <input
                        disabled={!edit}
                        type="number"
                        value={inp.masterPlanAmountLimit || ''}
                        name='masterPlanAmountLimit'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Max active investment per user">
                      <label htmlFor="">Max Active Investment: <span className="item">{config.data.investmentLimits}</span></label>
                      <input
                        disabled={!edit}
                        type="number"
                        value={inp.investmentLimits || ''}
                        name='investmentLimits'
                        onChange={getInput}
                      />
                  </InputWrapper>
                 
                </Container>

                <Container>

                
                  <div className="title">Withdrawals</div>
                  <InputWrapper title="Max Withdrawal Amount">
                      <label htmlFor="">Max Withdrawable Amount: <span className="item">{config.data.maxWithdrawalLimit} {config.data.nativeCurrency}</span></label>
                      <input
                        disabled={!edit}
                        type="number"
                        value={inp.maxWithdrawalLimit || ''}
                        name='maxWithdrawalLimit'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Min Withdrawal Amount">
                      <label htmlFor="">Min Withdrawable Amount: <span className="item">{config.data.minWithdrawalLimit} {config.data.nativeCurrency}</span></label>
                      <input
                        disabled={!edit}
                        type="number"
                        value={inp.minWithdrawalLimit || ''}
                        name='minWithdrawalLimit'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Step factor for withdrawal amount (Common Diff)">
                      <label htmlFor="">Withdrawable Amount Factor: <span className="item">{config.data.withdrawalCommonDiff} {config.data.nativeCurrency}</span></label>
                      <input
                        disabled={!edit}
                        type="number"
                        value={inp.withdrawalCommonDiff || ''}
                        name='withdrawalCommonDiff'
                        onChange={getInput}
                      />
                  </InputWrapper>

                  <InputWrapper title="Add in comma seperated strings with the last comma preserved">
                      <label htmlFor="">Withdrawable Coins: <span className="item">
                      {
                        config.data.withdrawalCoins.map
                      }
                        </span></label>
                      <input
                        disabled={!edit}
                        type="string"
                        value={inp.withdrawalCoins || ''}
                        name='withdrawalCoins'
                        onChange={getInput}
                      />
                  </InputWrapper>
                 
                </Container>
            </Form>
        </AdminWrapper>
      )
    )    
  )
}

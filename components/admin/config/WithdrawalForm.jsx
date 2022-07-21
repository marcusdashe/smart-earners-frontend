import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import {useSnap} from '@mozeyinedu/hooks-lab';

import {
    AdminWrapper,
    Form,
    InputWrapper,
    Container,
    Input,
    Label
  } from "./styles";

export default function WithdrawalForm({config}) {
    const {snap} = useSnap(.5);
    const [edit, setEdit] = useState(false);
  
    const [inp, setInp] = useState({  
      maxWithdrawalLimit: '',
      minWithdrawalLimit: '',
      withdrawalCoins: '',
      withdrawalCommonDiff: '',
    })
  
  
    const getInput=(e)=>{
      const {name, value} = e.target;
      setInp({...inp, [name]:value})
    }
  
    return (
        <Form>
            <Container>
  
              <div {...snap()} onClick={()=>setEdit(!edit)} className="title">
                <span>Withdrawals</span>
                <span className="edit">
                    <EditIcon />
                </span>
              </div>

                {
                    edit ?
                    (
                        <button {...snap()} className="btn">Submit</button>
                    ): ''
                }
              
              <InputWrapper title="Max Withdrawal Amount">
                  <Label htmlFor="">Max Withdrawable Amount: <span className="item">{config.data.maxWithdrawalLimit} {config.data.nativeCurrency}</span></Label>
                  <Input
                    disabled={!edit}
                    type="number"
                    value={inp.maxWithdrawalLimit || ''}
                    name='maxWithdrawalLimit'
                    onChange={getInput}
                  />
              </InputWrapper>
  
              <InputWrapper title="Min Withdrawal Amount">
                  <Label htmlFor="">Min Withdrawable Amount: <span className="item">{config.data.minWithdrawalLimit} {config.data.nativeCurrency}</span></Label>
                  <Input
                    disabled={!edit}
                    type="number"
                    value={inp.minWithdrawalLimit || ''}
                    name='minWithdrawalLimit'
                    onChange={getInput}
                  />
              </InputWrapper>
  
              <InputWrapper title="Step factor for withdrawal amount (Common Diff)">
                  <Label htmlFor="">Withdrawable Amount Factor: <span className="item">{config.data.withdrawalCommonDiff} {config.data.nativeCurrency}</span></Label>
                  <Input
                    disabled={!edit}
                    type="number"
                    value={inp.withdrawalCommonDiff || ''}
                    name='withdrawalCommonDiff'
                    onChange={getInput}
                  />
              </InputWrapper>
  
              <InputWrapper title="Add in comma seperated strings with the last comma preserved">
                  <Label htmlFor="">Withdrawable Coins: <span className="item">
                  {
                    config.data.withdrawalCoins.map
                  }
                    </span></Label>
                  <Input
                    disabled={!edit}
                    type="string"
                    value={inp.withdrawalCoins || ''}
                    name='withdrawalCoins'
                    onChange={getInput}
                  />
              </InputWrapper>
              
            </Container>
        </Form>
    )
}


import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import {useSnap} from '@mozeyinedu/hooks-lab';

import {
    Form,
    InputWrapper,
    Container,
    Input,
    Label
  } from "./styles";

export default function GeneralConfigForm({config}) {
    const {snap} = useSnap(.5);
    const [edit, setEdit] = useState(false);
  
    const [inp, setInp] = useState({  
      mcustomerSupport: '',
      verifyEmail: '',
      allowTransfer: '',
      unverifyUserLifeSpan: '',
      name: '',
      conversionRate: '',
      nativeCurrency: '',
      tradeCurrency: '',
    })
  
  
    const getInput=(e)=>{
      const {name, value} = e.target;
      setInp({...inp, [name]:value})
    }
  
    return (
        <Form>
            <Container>
  
                <div {...snap()} onClick={()=>setEdit(!edit)} className="title">
                    <span>General Config</span>
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
                    
                <InputWrapper title="App Name">
                    <Label htmlFor="">Name: <span className="item">{config.data.name}</span></Label>
                    <Input
                    disabled={!edit}
                    type="text"
                    value={inp.name || ''}
                    name='name'
                    onChange={getInput}
                    />
                </InputWrapper>

                <InputWrapper title="Allow users to have access to the customer support system">
                    <Label htmlFor="">Allow Custumer Support?: <span className="item">{config.data.customerSupport}</span></Label>
                    <Input
                    disabled={!edit}
                    type="text"
                    value={inp.customerSupport || ''}
                    name='customerSupport'
                    onChange={getInput}
                    />
                </InputWrapper>

                <InputWrapper title="Users wont be sent email for verifcation and during password reset, this will be done directly">
                    <Label htmlFor="">Allow Email Verification?: <span className="item">{config.data.verifyEmail}</span></Label>
                    <Input
                    disabled={!edit}
                    type="text"
                    value={inp.verifyEmail || ''}
                    name='verifyEmail'
                    onChange={getInput}
                    />
                </InputWrapper>


                <InputWrapper title="Number of time in seconds unverifed users are allowed to stay in the database. 0 means they stay forever">
                    <Label htmlFor="">Unverified Users' Lifespan: <span className="item">{config.data.unverifyUserLifeSpan}</span></Label>
                    <Input
                    disabled={!edit}
                    type="number"
                    min={0}
                    value={inp.unverifyUserLifeSpan || ''}
                    name='unverifyUserLifeSpan'
                    onChange={getInput}
                    />
                </InputWrapper>

                <InputWrapper title="Native currency of the app">
                    <Label htmlFor="">Native Currency: <span className="item">{config.data.nativeCurrency}</span></Label>
                    <Input
                    disabled={!edit}
                    type="text"
                    value={inp.nativeCurrency || ''}
                    name='nativeCurrency'
                    onChange={getInput}
                    />
                </InputWrapper>

                <InputWrapper title="Exchange currency of the app" >
                    <Label htmlFor="">Trade Currency: <span className="item">{config.data.tradeCurrency}</span></Label>
                    <Input
                    disabled={!edit}
                    type="text"
                    value={inp.tradeCurrency || ''}
                    name='tradeCurrency'
                    onChange={getInput}
                    />
                </InputWrapper>

                <InputWrapper title="Whatever the value is (in the native currency), is equivalent to 1 of the trade currency" >
                    <Label htmlFor="">Conversion Rate: <span className="item">{config.data.conversionRate} -- (1 { config.data.tradeCurrency} = {config.data.conversionRate} {config.data.nativeCurrency})</span></Label>
                    <Input
                    disabled={!edit}
                    type="number"
                    value={inp.conversionRate || ''}
                    name='conversionRate'
                    onChange={getInput}
                    />
                </InputWrapper>

            </Container>
        </Form>
    )
}


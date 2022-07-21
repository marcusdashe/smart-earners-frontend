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

export default function InvestmentForm({config}) {
    const {snap} = useSnap(.5);
    const [edit, setEdit] = useState(false);
  
    const [inp, setInp] = useState({  
      masterPlanAmountLimit: '',
      investmentLimits: '',
    })
  
  
    const getInput=(e)=>{
      const {name, value} = e.target;
      setInp({...inp, [name]:value})
    }
  
    return (
        <Form>
            <Container>
  
                <div {...snap()} onClick={()=>setEdit(!edit)} className="title">
                    <span>Investment</span>
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
    )
}


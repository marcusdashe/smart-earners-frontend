import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'

export default function Pop({msg, setMsg, status}) {

  return (
    <PopStyle>
            
        <div className={msg ? 'popmsg show' : 'popmsg'} style={{
            color: status ? '#00e3a4' : ' #7e0000',
            background: status ?  '#2e9976a8' : '#f571717d',
            border: '1px solid',
        }}>
            <div onClick={()=>setMsg('')} className="close"><CloseIcon style={{fontSize: '1rem'}}/></div>
            {
                (function(){
                    if(status){
                        return <span>{msg}</span>
                    }else{
                        return <span>{msg}</span>
                    }
                }())
            }
        </div>

    </PopStyle>
  )
}


const PopStyle = styled.div`

    .popmsg{
        padding: 5px;
        display: inline-block;
        border-radius: 5px;
        min-width: 50px;
        position: absolute;
        left: 50%;
        transition: .3s;
        top: -100%;
        transform: translateX(-50%);
        
        .close{
            cursor: pointer;
            position: absolute;
            top: -2px;
            right: -2px;
            font-size: .7rem;
            color: #ccc;

            &:hover{
                color: #fff;
            } 
        }
    }

    .show{
        top: 0;
    }

`
import { useRouter } from "next/router";
import styled from 'styled-components'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function GoBackBtn() {
    const router = useRouter()
    
  return router.pathname !== '/' &&  <Btn onClick={()=>router.back()}>
    <KeyboardBackspaceIcon />
  </Btn> 
}


const Btn = styled.div`
    padding: ${({padding})=>padding ? padding : '0'};
    color: ${({color})=>color ? color : 'var(--major-color-purest)'};
    cursor: pointer;
    font-weight: bold;
`
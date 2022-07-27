import { useRouter } from "next/router";
import styled from 'styled-components'

export default function GoBackBtn() {
    const router = useRouter()
    
  return router.pathname !== '/' &&  <Btn onClick={()=>router.back()}>Back</Btn> 
}


const Btn = styled.button`
    padding: ${({padding})=>padding ? padding : '5px'};
    color: ${({color})=>color ? color : 'var(--major-color-purest)'}
    cursor: pointer;
    font-weight: bold;
`
import { useEffect } from 'react';
import styled from 'styled-components';

const Modal_ = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
    z-index: 1000000000;
    transition: all .6s;
    opacity: ${({show})=>show ? 1 : 0};
    visibility: ${({show})=>show ? 'visible' : 'hidden'};

    @media (min-width: 920px){
        opacity: 0;
        visibilty: hidden;
    }
`

export default function Modal({showModal, userInfo, setShowModal, children}) {

    
    const closeMenu =(e)=>{
        if(e.target.className.includes()){
            showModal(false)
        }
        console.log(showModal)
     }
     
     useEffect(() => {
        if(showModal){
            // get the body and set overflow to hidden
            document.body.style.overflow = 'hidden'
        }else{
            // get the body and set overflow to auto
            document.body.style.overflow = 'auto'
        }
       
     }, [showModal])
     


  return (
    <Modal_ userInfo={userInfo} show={showModal} onClick={closeMenu}>
        {children}
    </Modal_>
  )
}

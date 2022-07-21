import React, {useRef, useState, useEffect} from 'react'
import Header_ from '../../components/admin/header/Header';
import styled from 'styled-components';
import SideMenu_ from '../../components/admin/sideMenu/SideMenu';
import { ScrollBar } from '../../styles/globalStyle';
import { MdClose, MdMenu} from 'react-icons/md'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Modal from '../../components/modals/popUpModal/PopUpModal';
import {useToggle} from '@mozeyinedu/hooks-lab'

const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  right: 0;
  height: 60px;
  background: var(--major-color-purest)
`
const Main = styled.div`
  width: 100%;
  min-height: calc(100% - 55px);

  @media (max-width: 920px){
   
  }
`
const SideBarSmall = styled.div`
  width: 170px;
  position: fixed;
  transform: translateX(0%);
  z-index: 1000;
  transition: .4s;
  background: ${({toggleState})=>toggleState ? 'var(--light-theme)' : 'var(--dark-theme)'};
  top: 0;
  left: 0;
  bottom: 0;
  box-shadow: 2px 2px 3px #999;


  .icon{
    font-size: 2.5rem;
  }

  .toggle{
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    cursor: pointer;
    display: none;
  }

  @media (max-width: 980px){
    transform: ${({expanded})=>expanded ? 'translateX(0%)' : 'translateX(-80%)'};

    .toggle{
      display: block;
    }
  }
`

const MainWrapper = styled.div`
  background: ${({toggleState})=>toggleState ? 'var(--light-theme)' : 'var(--dark-theme)'};
  height: 100%;
  padding-top: 60px;;
  padding-left: 175px;

  @media (max-width: 980px){
    padding-left: 40px
  }

`


export default function AdminLayout({children, userInfo, toggleState}) {
    const [expanded, setExpanded] = useState(true);

    return (
      <>
        <Header>
          <Header_ userInfo={userInfo}/>
        </Header>

        <Main>
          <SideBarSmall toggleState={toggleState} expanded={expanded}>
            <div  onClick={()=>setExpanded(!expanded)} className="toggle">
              {
                expanded ? <NavigateNextIcon className='icon'/> : <NavigateBeforeIcon className='icon'/>
              }
            </div>
              <SideMenu_ />
          </SideBarSmall>

          <MainWrapper toggleState={toggleState}>
              {children}
          </MainWrapper>
        </Main>   
      </>
    )
}

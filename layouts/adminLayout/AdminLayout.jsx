import React, {useRef, useState, useEffect} from 'react'
import Header_ from '../../components/admin/header/Header';
import styled from 'styled-components';
import SideMenu_ from '../../components/admin/sideMenu/SideMenu';
import { ScrollBar } from '../../styles/globalStyle';


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
  left: 0;
  right: 0;
  z-index: 1;
  top: 55px;
  padding-right: 100px;
  position: absolute;
`

const TopFlap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 10px 15px;
  top: 5px;
  left: 40px;
  z-index: 1;
  background: ${({toggleState})=>toggleState ? '#fff' : '#000'};
  box-shadow: -1px -1px 3px 2px #363333;
  bottom: 0;

  .handle {
    position: absolute;
    width: 8px;
    height: 100%;
    background: teal;
    left: 0;
    bottom: 0;
    cursor: ew-resize
  }

  .dragging{
    border-left: 3px solid var(--major-color-purest);
  }
`

const BottomFlap = styled.div`
  width: 100%;
  padding-left: 52px;
  height: 100vh;
  position: fixed;
  background: ${({toggleState})=>toggleState ? '#fff' : '#000'};
  top: 0;
  right: 0;
  bottom: 0;

`


export default function AdminLayout({children, userInfo, toggleState}) {
    const topFlapRef = useRef()
    const mainRef = useRef()
    const [ dragging, setDragging ] = useState(false);
    const [ rect, setRect ] = useState(0);
    
    useEffect(()=>{
      setRect(topFlapRef.current.getBoundingClientRect());
    }, [])

    

    function startDragMouse(){
        setDragging(true)
        mainRef.current.style.cursor = 'ew-resize'
    }

    function dragMouse(e){
        const width = e.clientX;
        if(dragging) {
          
          if(width > 250 && width < topFlapRef.current.clientWidth - 100) {
            return
          }else{
            if(width > 1){
              topFlapRef.current.style.left = `${width}px`;
            }
          }
        }


        
    }

    function stopDragMouse(){
        mainRef.current.style.cursor = 'default'
        setDragging(false)
    }

    function startDragTouch(){
        setDragging(true)
        mainRef.current.style.cursor = 'ew-resize'
        
    }

    function dragTouch(e){
        const width = e.touches[0].clientX
        if(dragging) {
          
          if(width > 250 && width < topFlapRef.current.clientWidth - 100) {
            return
          }else{
            if(width > 1){
              topFlapRef.current.style.left = `${width}px`;
            }
          }
        }

        
    }


    function stopDragTouch(){
        mainRef.current.style.cursor = 'default'
        setDragging(false);
        
    }

    return (
      <>
        <Header>
          <Header_ userInfo={userInfo}/>
        </Header>

        <Main
          userInfo={userInfo}
          ref={mainRef}
          onMouseUp={stopDragMouse}
          onMouseMove={dragMouse}

          onTouchEnd={stopDragTouch}
          onTouchMove={dragTouch}
          >

          <BottomFlap userInfo={userInfo} toggleState={toggleState}>
            <SideMenu_ userInfo={userInfo}/>
          </BottomFlap>  

          <TopFlap toggleState={toggleState} ref={topFlapRef} userInfo={userInfo}>
            <div
              onMouseDown={startDragMouse}
              onTouchStart={startDragTouch}
              className={dragging ? 'handle dragging' : 'handle'}
              >
            </div>
            
            {children}
          </TopFlap>  

        </Main>   
      </>
    )
}

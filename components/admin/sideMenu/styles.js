import styled from 'styled-components';

const SideMenu = styled.div`
  width: 100%;
  height: 100%;
`

const IconBar = styled.div`
  min-width: 120px;
  height: 100%;
  position: absolute;
  box-shadow: 2px 2px 5px #777;
  left: 0;
  display: flex;
  padding: 5px;
  // align-items: center;
  justify-content: center;
  flex-direction column;
  top: 0;
  bottom: 0;
`

const IconWrapper = styled.a`
  height: 35px;
  border-radius: 7px;
  margin: 4px 0;
  user-select: none;
  -webkit-user-select: none;
  padding: 3px;
  display: flex;
  border: ${({active})=>active ? '1px solid var(--bright-color)' : '1px solid var(--major-color-30A)'};
  align-items: center;
  // justify-content: center;
`

const InfoBar = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  border: 1px solid blue;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  SideMenu,
  IconBar,
  IconWrapper,
  InfoBar
}
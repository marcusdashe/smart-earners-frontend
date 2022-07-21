import styled from 'styled-components';
import { ScrollBar } from '../../../styles/globalStyle';

const SideMenu = styled.div`
  width: 100%;
  height: 100%;
`

const IconBar = styled.div`
  min-width: 90%;
  height: 100%;
  display: flex;
  padding: 5px;
  justify-content: center;
  flex-direction column;
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
  justify-content: flex-end;
`

export {
  SideMenu,
  IconBar,
  IconWrapper,

}
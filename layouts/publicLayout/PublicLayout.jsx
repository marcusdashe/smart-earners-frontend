import React from 'react'
import { Main, Header, Footer } from '../../styles/globalStyle'
import Header_ from '../../components/public/header/Header';
import GlobalFooter_ from '../../components/globalFooter/GlobalFooter';


export default function PublicLayout({children, userInfo}) {
  return (
    <>
      <Header headerHeight="200px">
        <Header_ userInfo={userInfo}/>
      </Header>

      <Main userInfo={userInfo} height={{headerHeight: '200px', footerHeight: '50px'}}>
        {children}
      </Main>

      <Footer footerHeight='50px'>
        <GlobalFooter_ userInfo={userInfo}/>
      </Footer>
    </>
  )
}

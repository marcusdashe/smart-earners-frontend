import { Main, Header, Footer } from '../../styles/globalStyle'
import GlobalFooter_ from '../../components/globalFooter/GlobalFooter';
import Header_ from '../../components/user/header/Header';


export default function DashboardLayout({children, userInfo}) {

  return (
    <>
      <Header headerHeight="60px">
       <Header_ userInfo={userInfo} />
      </Header>

      <Main userInfo={userInfo} height={{headerHeight: '60px', footerHeight: '50px'}}>
        {children}
      </Main>

      <Footer footerHeight='50px'>
        <GlobalFooter_ userInfo={userInfo} />
      </Footer>
    </>
  )
}

import React from 'react';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SettingsIcon from '@mui/icons-material/Settings';
import {useRouter} from 'next/router'

import {
  SideMenu,
  IconBar,
  IconWrapper,
  InfoBar
} from './styles'

export default function SideMenu_() {
const router = useRouter()

  const navLinks =[
    {
        link: 'Analysis',
        url: '/admin',
        icon: <SsidChartIcon />
    },
    {
      link: 'Users',
      url: '/admin/users',
      icon: <PersonIcon />
    },
    {
        link: 'Deposit',
        url: '/admin/deposit',
        icon: <SavingsIcon />
    },
    {
        link: 'Investment',
        url: '/admin/investment',
        icon: <SavingsIcon />
    },
    {
        link: 'Withdrawals',
        url: '/admin/withdrawals',
        icon: <CreditScoreIcon />
    },
    {
        link: 'Transfer',
        url: '/admin/transfer',
        icon: <CurrencyExchangeIcon />
    },
    {
        link: 'Transactions',
        url: '/admin/transactions',
        icon: <PaidIcon />
    },
    {
        link: 'Referral',
        url: '/admin/referrals',
        icon: <PeopleAltIcon />
    },
    {
      link: 'Config',
      url: '/admin/web-config',
      icon: <SettingsIcon />
    },
    
]

  return (
    <SideMenu>
      <IconBar>
        {
          navLinks.map((link, i)=>{
            return (
              <div key={i}>
                  <IconWrapper active={link.url === router.asPath} href={link.url} >

                      <div title={link.link} className={link.url === router.asPath ? 'side-menu-active-link' : ''}>
                          {link.icon}
                      </div>

                      <div style={{marginLeft: '6px'}} title={link.link} className={link.url === router.asPath ? 'side-menu-active-link' : ''}>
                          {link.link}
                      </div>
                      
                  </IconWrapper>
              </div>
            )
          })
        }
      </IconBar>
    </SideMenu>
  )
}


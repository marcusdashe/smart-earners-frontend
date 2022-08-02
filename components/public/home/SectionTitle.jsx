import React from 'react'
import styled from 'styled-components'
import { device } from './styles'

const SectionTitle = ({subtitle, children}) => {
  return (
    <StyledSectionTitle>
        <h2> {children} </h2>
        <p>{subtitle}</p>

    </StyledSectionTitle>
  )
}

const StyledSectionTitle = styled.div`
    width: 100%;
    text-align: center;
   h2{
    margin: 10px auto 20px;
    transform: uppercase ;
   }
   p{
    font-size:1rem;
    width: 80%;
    margin: 0 auto 10px;
   }
   @media ${device.tablet}{
   p{
    font-size: 1.1rem;
   }
  }

`

export default SectionTitle
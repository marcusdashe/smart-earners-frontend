import React from 'react'
import styled from 'styled-components'
import { device } from './styles'


const ServiceCard = ({datum}) => {
  return (
    <StyledCard>
        <span>
            <figure style={{margin: '-6px'}}>{datum.emblem}</figure>
            <p>{datum.title}</p>
        </span>

        <p>{datum.description}</p>
    </StyledCard>
  )
}

const StyledCard =styled.section`
        width:150px;
        background: #fff;
        padding: 10px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        font-size: 1rem;
        text-align: center;  
        border-radius: 5px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        
        span p{
            font-weight: bold;
            margin: 5px;
        }

    @media ${device.tablet}{
        width: 250px;
    }
`

export default ServiceCard
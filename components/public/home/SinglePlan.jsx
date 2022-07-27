import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router';
import resolveInvestmentLifespan from '../../../utils/resolveInvestmentLifeSpan';

const SinglePlan = ({data}) => {
  const router = useRouter()

  return (
    <StyledSinglePlan>
        <section className="content">
            <span className="top">
                  <p>{ data.type }</p>
            </span>

            <span className="bottom">
                <aside className="amount">
                    <p>Amount</p>
                    <p style={{fontSize: '.9rem', fontWeight: 'bold'}}>{data.amount} {data.currency}</p>
                </aside>
                <aside style={{borderLeft:'1px solid #ccc',paddingLeft: '5px'}} className="returns">
                    <p>Returns</p>
                    <p style={{fontSize: '.9rem', fontWeight: 'bold'}}>{resolveInvestmentLifespan(data.returnPercentage, data.lifespan)}</p>
                </aside>
            </span>
            <button onClick={()=>router.push('/dashboard/investment')}>Invest Now</button>
        </section>
    </StyledSinglePlan>
  )
}


const StyledSinglePlan = styled.div`
        width: 300px;
        justify-self: center;
        height: fit-content;
        background-image: linear-gradient(to bottom, #a4b0b5e0 60%, #c7edff);
        color: var(--major-color-purest);
        user-select: none;

        @media (min-width: 700px){
          width: 270px;
        }

        .content{
          width: 100%;
          padding: 20px;
          display: flex;
          flex-flow: column nowrap;

          .top{
              width: 100%;
              height: 30px;
              display: flex;
              color: #fff;
              justify-content: flex-start;
              align-items: flex-start;
              border-bottom: 2px solid whitesmoke;
              p{
                font-size: 1.2rem;
                font-weight: 600;
              }
          }

          .bottom{
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            .amount p:nth-child(2){
              font-weight: 600;
              font-size: 1rem;
            }

            .returns p:nth-child(2){
              font-weight: 600;
              font-size: 1rem;
            }
          }
          button{
                outline: none;
                border: none;
                border-radius: 20px;
                background: var(--bright-color);
                color: #fff;
                font-weight: 600;
                cursor: pointer;
                margin: 30px auto;
                padding: 4px 40px;
                font-size: 1.2rem;
                display: grid;
                place-items: center;
            }
        }

`
export default SinglePlan
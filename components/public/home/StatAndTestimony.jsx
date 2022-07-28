import styled from 'styled-components'
import Testimony from './Testimony';
import StatsWidget from './statsWidget'

import {
    StatAndTestimonyWrapper
} from './styles'


export default function StatAndTestimony({userInfo}) {

    return (
        <StatAndTestimonyWrapper>
            <section className="meso-layer">
                <ServiceCard>
                <aside className="left">
                   <Testimony userInfo={userInfo}/>
                </aside>

                <aside className="right">
                    <StatsWidget />  
                </aside>
                </ServiceCard>
            </section>
        </StatAndTestimonyWrapper>
    )
}



const ServiceCard =styled.section`
    display: flex;
    flex-flow: wrap;
    width: 100%;
    background: var(--major-color-30A);
    padding: 10px;
    justify-content: center;
    align-items: center;
    text-align: center; 
    
    .left{
      width: 85%;
      min-width: 200px;
      max-width: 500px;
      padding: 0;
      margin: 2px;

      @media (min-width: 600px){
        width: 400px;
      }
    }

    .right{
      width: 80%;
      min-width: 200px;
      max-width: 350px;
      margin: 2px;
      // border: 1px solid green;

      @media (min-width: 600px){
        width: 400px;
      }
    }
`
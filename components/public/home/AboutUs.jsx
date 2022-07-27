import Image from 'next/image'
import styled from 'styled-components'
import { device } from './styles'

import {
  HeroSectionWrapper,
  HeroSection,
  HeroSectionTitle,
  HeroSectionText,
  AboutUsContainer
} from './styles'

import { SectionTitle } from '../../../styles/globalStyle'

const AboutUs = () => {
  return (
    
        <AboutUsContainer>
            <SectionTitle>ABOUT US</SectionTitle>
            <section className="meso-layer">
              <ServiceCard>
                <aside className="about-img">
                          <Image src={"/trademarks/abstract.png"} width="300" height="300" alt="about us"/>
                  </aside>
                  <aside className="about-text">
                      <p>  SmartEarners is a trustworthy platform that has been in existence for years serving several financial institutions across the world. We have had major rights and praises of good reputation amongst the section of investment platforms for trading and circular form of rewards.</p>
                  </aside>
              </ServiceCard>
            </section>
        </AboutUsContainer>
   
  )
}

export default AboutUs

const ServiceCard =styled.section`
    padding: 10px;
    display: flex;
    flex-flow:  wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center; 
    
    .about-img{
      width: 120px;

      @media ${device.tablet}{
        width: 200px;
      }
    }

    .about-text{
      width: 300px;

      @media ${device.tablet}{
        width: 550px;
      }
    }
`
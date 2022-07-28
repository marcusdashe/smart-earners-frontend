import Image from 'next/image'
import {
    HeroSectionWrapper,
    HeroSection,
    CardWrapper,
    LandscapeCard,
    ImageCard,
    PartnersWrapper
} from './styles'

import SectionTitle from "./SectionTitle"

const Partners = () => {
  return (
    <PartnersWrapper>
      <SectionTitle subtitle={"We never walk alone, our strategic and key partners over the years"}> OUR PARTNERS </SectionTitle>

      
        <section className="content">
         

            <ImageCard>
              <Image src={"/trademarks/infinox.jpg"}  layout="intrinsic" width="70" height="50" alt="" />
            </ImageCard>

            <ImageCard>
              <Image src={"/trademarks/binance.png"}  layout="intrinsic" width="85s" height="50" alt="" />
            </ImageCard>

            <ImageCard>
              <Image src={"/trademarks/fxtm.png"}  layout="intrinsic" width="85" height="50" alt="" />
            </ImageCard>

            <ImageCard>
              <Image src={"/trademarks/afx-logo.png"}  layout="intrinsic" width="70" height="70" alt="" />
            </ImageCard>
            
        
        </section>
      </PartnersWrapper>
  )
}

export default Partners
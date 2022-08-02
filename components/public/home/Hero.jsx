import Image from 'next/image'
import {useSnap} from '@mozeyinedu/hooks-lab'
import {useRouter} from 'next/router'

import {
    HeroSectionWrapper,
    HeroSection,
    HeroButton,
    HeroSectionTitle,
    HeroSectionSubTitle,
    HeroSectionText,
} from './styles';



const Hero = () => {
    const {snap} = useSnap(.5)
    const router = useRouter();

    return (

        <HeroSectionWrapper>
            <section className="meso-layer">
                    <aside className="left-side">
                        <caption><h1>SmartEarners</h1></caption>
                        <p>A Forex trading solution built for anyone with Small Capital to invest in forex and make a nice income</p>
                        <button {...snap()} onClick={()=>router.push(`/dashboard/investment/`)}>Get Started</button>
                    </aside>

                    <aside className="right-side">
                        <Image src={"/hero.png"} width="300" height="300" alt="Hero Flat Characters" />
                    </aside>
            </section>
        
        </HeroSectionWrapper>
        // <HeroSectionWrapper type='hero' bg='#00415D30'>
        //     <HeroSection padd="pad">

        //         <HeroSectionTitle>SmartEarners </HeroSectionTitle>

        //         <HeroSectionSubTitle>We Trade it, You Learn & Earn it</HeroSectionSubTitle>

        //         <HeroSectionText>
        //             SmartEarner is a trustworthy platform that has been in existence for years serving several financial institutions across the world.
        //         </HeroSectionText>
            
        //         <HeroButton {...snap()} onClick={()=>router.push(`/dashboard/investment/`)} >INVEST NOW</HeroButton>

        //     </HeroSection>
    
        //     <HeroSection>
        //             <Image src={"/hero.png"} alt="Hero" width="350" height="250"/>
        //     </HeroSection>    
        // </HeroSectionWrapper>
    )
}



export default Hero
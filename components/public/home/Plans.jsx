import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide } from 'swiper/react';
import { getPlans } from '../../../redux/investmentPlans/investmentPlans.js';
import styled from 'styled-components';
import { SectionTitle } from '../../../styles/globalStyle.js';
import { SectionSubTitle } from '../../../styles/globalStyle.js';
import resolveInvestmentLifespan from '../../../utils/resolveInvestmentLifeSpan.js';
import {useRouter} from 'next/router'


import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar, 
    A11y,
    Autoplay,
  } from "swiper/core";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Spinner from '../../../loaders/Spinner';

import {
    PlanSectionWrapper,
    SwipeWrapper
} from './styles'




const Plans = ({userInfo}) => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    const {plans} = state.plans;
    

  
    useEffect(()=>{
        dispatch(getPlans())
    }, [])

  return (
    <PlanSectionWrapper>
       <SectionTitle>INVESTMENT PLANS</SectionTitle>
       {
        plans.isLoading ? 
        (
            <div style={{display: 'flex', justifyContent: 'center'}}><Spinner size='25px'/></div>
        ):
        (
            plans.data.length < 1 ?
            (
                <h4 style={{textAlign: 'center', fontWeight: '500'}}>Coming Soon...</h4>
            ):
            (
                <>
                    <h4 style={{textAlign: 'center', fontWeight: '500'}}>Find the Package Plan that is most convenient for you</h4>
                    <AllPlan>
                        {
                            <SwipeWrapper_>
                            <Swiper
                                 className='swiper'
                                 modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                                 spaceBetween={10}
                                 autoplay = { {delay: 5000}}
                                 scrollbar={{draggable: true}}
                                //  loop
                                 pagination = {{ clickable: true}}
                                 slidesPerView={3}
                                 breakpoints={
                                     {
                                         0:{
                                             width: 0,
                                             slidesPerView: 1,
                                             spaceBetween: 10
                                         },
                                         500:{
                                             width: 700,
                                             slidesPerView: 2,
                                             spaceBetween: 10
                                         },
                                         680:{
                                             width: 680,
                                             slidesPerView: 2,
                                             spaceBetween: 10
                                         },
                                         920:{
                                             width: 920,
                                             slidesPerView: 3,
                                             spaceBetween: 10
                                         },
                                     }
                                   }>
                                { plans.data.map((each, idx) => 
                                        (
                                        <SwiperSlide key={idx}>
                                            <SinglePlan data={each} />
                                        </SwiperSlide>
                                    )
                                )  }
                            </Swiper>
                        </SwipeWrapper_>       
                        }
                    </AllPlan>
                </>
            )
        )
       }  
    </PlanSectionWrapper>
  )
}

export default Plans

const SinglePlan = ({data}) => {
  const router = useRouter()

  return (
    <StyledSinglePlan>
        <section className="content">
            <span className="top">
                  <p>{ data.type && data.type.toUpperCase() }</p>
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
            <button onClick={()=>router.push('/dashboard')}>Invest Now</button>
        </section>
    </StyledSinglePlan>
  )
}


const StyledSinglePlan = styled.div`
  width: 330px;
  height: 190px;
  background-image: linear-gradient(to right,var(--major-color-purest),#6babc9);
  color: #fff;
  user-select: none;

  @media (min-width: 400px){
    width: 300px;
  }

  button{
    width: 100px;
    margin: 25px auto 0 auto;
    padding: 8px;
    border-radius: 5px;
    border: none;
    background: var(--bright-color);
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 700px){
    width: 300px;
  }

  .content{
    width: 100%;
    padding: 20px 5px ;
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
      
      aside{
        width: 50%;
        margin-top: 10px;
      }
      .amount p:nth-child(2){
        font-weight: 600;
        font-size: 1rem;
      }

      .returns p:nth-child(2){
        font-weight: 600;
        font-size: 1rem;
      }
    }

    .actions{
      display: flex;
      justify-content: space-around;
      align-items: center;

      .actionBtn{
        cursor: pointer;
        &:hover{
          opacity: .5;
        }
      }
    }
  }

`

const AllPlan = styled.div`
  width: 98%;
  max-width: 1200px;
  margin: auto;
  padding: 10px 0;
`
const SwipeWrapper_ = styled.div`
  width: 100%;
  margin: auto;

  .swipe{
    @media(max-width: 400px){
      width: 300px;
    }
  }
`
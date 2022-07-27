import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Swiper, SwiperSlide } from 'swiper/react';
import { getPlans } from '../../../redux/investmentPlans/investmentPlans.js';

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
import SinglePlan from './SinglePlan'
import { SectionTitle } from '../../../styles/globalStyle.js';
import { SectionSubTitle } from '../../../styles/globalStyle.js';



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
                <SectionSubTitle style={{display: 'flex', justifyContent: 'center'}}>Coming soon...</SectionSubTitle>
            ):
            (
                <>
                    <SectionSubTitle style={{textAlign: 'center'}}>Find the Package Plan that is most convenient for you</SectionSubTitle>
                    <main className="meso-layer">
                        {
                            <SwipeWrapper>
                            <Swiper
                                className='swiper'
                                modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                                spaceBetween={10}
                                // autoplay = { {delay: 5000}}
                                // loop
                                // scrollbar={{draggable: true}}
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
                        </SwipeWrapper>       
                        }
                    </main>
                </>
            )
        )
       }  
    </PlanSectionWrapper>
  )
}

export default Plans
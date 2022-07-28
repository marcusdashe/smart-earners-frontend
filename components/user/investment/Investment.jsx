import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { investPlan, getTxn } from "../../../redux/invest/invest";
import Feedback from "../../Feedback";
import { getPlans } from '../../../redux/investmentPlans/investmentPlans.js';
import {useSnap} from '@mozeyinedu/hooks-lab'
import Spinner from '../../../loaders/Spinner';
import { SwipeWrapper } from "../../public/home/styles";
import resolveInvestmentLifespan from "../../../utils/resolveInvestmentLifeSpan";
import styled from 'styled-components';
import Active from "./Active";
import Profile from "./Profile";
import Mature from "./Mature";



import {Swiper, SwiperSlide } from 'swiper/react';
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



const Plans = ({userInfo}) => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    const [shwowActive, setShowActive] = useState(true)
    const {plans} = state.plans;
    const {txn} = state.investment;

    const {invest} = state.investment
    const [feedback, setFeedback] = useState({
      msg: invest.msg,
      status: false
    })
  
    useEffect(()=>{
        dispatch(getPlans())
        dispatch(getTxn())
    }, [])

    const investBtn=(id)=>{
      dispatch(investPlan(id))  
    }

    useEffect(()=>{
      setFeedback({
        msg: invest.msg,
        status: true
      })
    }, [invest])

  return (
    <Plan>
      <Profile setShowActive={setShowActive}/>
      <div style={{padding: '10px 20px 2px 20px', fontWeight: 'bold'}}>Plans</div>
      <div className="center"> {
        invest.isLoading ? <Spinner size="24px"/> : ''
      } </div>
      <div className="center">
        <Feedback
          msg={invest.msg}
          status={invest.status}
          feedback={feedback}
          setFeedback={setFeedback}
        />
      </div>
      <AllPlan>
        {
          plans.isLoading ?
            <div className="center"><Spinner size="30px" /></div>:
          (
            plans.data.length < 1 ? <div className="center">No Plan available at this moment</div> : 
            (
              <div>
              <SwipeWrapper_>
                  {
                    plans.isLoading ? <div className="center">
                    <Spinner size="30px" />
                    </div>:
                    (
                      plans.data.length < 1 ? <div className="center">No Plan available at this moment</div> : 
                      (
                  <Swiper
                    className='swiper'
                    modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                    spaceBetween={10}
                    autoplay = { {delay: 5000}}
                    loop
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
                      {plans.data.map((each, idx) => 
                          (
                            <SwiperSlide className="swipe" key={idx}>
                                <SinglePlan data={each} setFeedback={setFeedback} feedback={feedback} invest={invest} investBtn={investBtn}/>
                            </SwiperSlide>
                          )
                      ) }
                  </Swiper>
                      )
                    )
                  }
              </SwipeWrapper_>   
      

              </div>
            )
          )
        }  
      </AllPlan>

      <h3 style={{padding: '20px 5px 5px 20px'}}>INVESTMENT SUMMARY</h3>

      {
        shwowActive ? <Active txn={txn}/> : <Mature txn={txn}/>
      }
      
    </Plan>
    )
  }

export default Plans


const SinglePlan = ({data, investBtn}) => {
  const {snap} = useSnap(.5)


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
            <button onClick={()=>investBtn(data._id)} {...snap()}>
              Invest
            </button>
        </section>
    </StyledSinglePlan>
  )
}





const StyledSinglePlan = styled.div`
  width: 330px;
  height: fit-content;
  background-image: linear-gradient(to right,var(--major-color-purest),#6babc9);
  color: #fff;
  user-select: none;

  @media (min-width: 400px){
    width: 300px;
  }

  .feedback{

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
    width: 270px;
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
      justify-content: center;

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

const Plan = styled.div`
  form{
    width: 90%;
    max-width: 400px;
    margin: 10px auto;

  }

  .center{
    dislay: flex;
    width: 60%;
    max-width: 400px;
    margin: auto;
    justify-content: center;
  }

  .slide{
    border: 1px solid gold;
    width: 300px
  }
  .title{
    font-weight: bold;
    text-align: center;
  }
  label{
    display: block;
    padding-bottom: 2px;
    font-weight: 500;
  }

  input{
    width: 100%;
    display block;
    padding: 8px;
    border: 1px solid #aaa;
    border-radius: 5px;

    &:focus{
      outline: none;
      border: 2px solid green;
    }

    &[type="submit"]{
      color: #fff;
      background: var(--major-color-purest);
      cursor: pointer;
    }
  }

  .center {
    display: flex;
    justify-content: center;
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

const Sum = styled.div`
  width: 70%;
  max-width: 400px;
  padding: 10px;
  text-align: center;
  margin: 10px auto;
  box-shadow: 2px 2px 4px #aaa, -2px -2px 4px #aaa;
`
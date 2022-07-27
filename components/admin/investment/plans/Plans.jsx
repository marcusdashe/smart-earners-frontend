import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../../loader/Loader";
import EditIcon from '@mui/icons-material/Edit';
import {useSnap} from '@mozeyinedu/hooks-lab';
import Link from 'next/link';
import { useRouter } from "next/router";
import { handleAdd, getPlans, handleUpdate, handleDelete } from "../../../../redux/investmentPlans/investmentPlans";
import styled from 'styled-components'
import Spinner from '../../../../loaders/Spinner';

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

import {
  AdminWrapper,
  Form,
  InputWrapper,
  Container,
  Input,
  Header,
  Title,
  Label
} from "../../styles";
import Feedback from "../../../Feedback";
import { SwipeWrapper } from "../../../public/home/styles";
import SinglePlan from "../../../public/home/SinglePlan";

export default function Plans() {
  const router = useRouter()
  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  const {plans} = state.plans;
  const [update, setUpdate] = useState(false);

  const initialState = {
    type: '',
    amount: '',
    lifespan: '',
    returnPercentage: '',
  }
  const [data, setDate] = useState(initialState)

  useEffect(()=>{
    dispatch(getPlans())
  }, [])
  


  return (
    <div>
      <Header>
          <Link href='/admin/investment' passHref>
            <a className={router.asPath === '/admin/investment' ? 'active' : ''}>Config</a>
          </Link>
          <Link href='/admin/investment/transactions' passHref>
            <a className={router.asPath === '/admin/investment/transactions' ? 'active' : ''}>Transactions</a>
          </Link>
          <Link href='/admin/investment/plans' passHref>
            <a className={router.asPath === '/admin/investment/plans' ? 'active' : ''}>Plans</a>
          </Link>
      </Header>

      {
        plans.isLoading ? <Loader_ /> : 
        (
          plans.data.length < 1 ?
          (
            <div style={{textAlign: 'center'}}>{plans.msg || 'No data currently available'}</div>
          ):
          (
            <AdminWrapper>
              <SetPlan setUpdate={setUpdate} update={update} setDate={setDate} data={data}/>
              <GetPlans setUpdate={setUpdate} update={update} setDate={setDate} data={data} plans={plans.data}/>
            </AdminWrapper>
          )
        )
      }
    </div>
  )
}



function SetPlan({setUpdate, update, data, setDate}){
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const {add} = state.plans;

  //feedback
  const [feedback, setFeedback] = useState({
    msg: add.msg,
    status: false
  });
  useEffect(()=>{

    // show feedback
    setFeedback({
      msg: add.msg,
      status: true
    });
    
  }, [add])

  const [inp, setInp] = useState(data)
  const getInp=(e)=>{
    const {name, value} = e.target;
    setInp({...inp, [name]:value})
  }

  const submit=(e)=>{
    e.preventDefault()
    dispatch(handleAdd(inp))
  }

  return (
    <Plan>
      <form onSubmit={submit}>
        <div className="title">{update ? "Update a Plan" : "Add a Plan"}</div>

        <div className="center"> 
          <Feedback
            msg={add.msg}
            status={add.status}
            feedback={feedback}
            setFeedback={setFeedback}
          />
        </div>

        <InputWrapper>
          <label htmlFor="">Type:</label>
          <input
            autoFocus
            type="text"
            name='type'
            placeholder="Type"
            value={inp.type || ''}
            onChange={getInp}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="">Amount:</label>
          <input
            type="number"
            min={0}
            name='amount'
            placeholder="amount"
            value={inp.amount || ''}
            onChange={getInp}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="">Return Percentage:</label>
          <input
            type="number"
            min={0}
            name='returnPercentage'
            placeholder="Return Percentage"
            value={inp.returnPercentage || ''}
            onChange={getInp}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="">Lifespan:</label>
          <input
            type="number"
            min={0}
            name='lifespan'
            placeholder="lifespan"
            value={inp.lifespan || ''}
            onChange={getInp}
          />
        </InputWrapper>

        <div className="center">{add.isLoading ? <Spinner size='20px'/> : ""}</div>

        <InputWrapper>
          <input
            disabled={add.isLoading}
            type="submit"
            value={add.isLoading ? 'Loading...' : (update ? 'Update Plan' : 'Add Pann')}
          />
        </InputWrapper>
      </form>
    </Plan>
  )
}

function GetPlans({setUpdate, update, data, setDate, plans}){

  return (
    <Plan>
      <AllPlan>
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
                {plans.map((each, idx) => 
                    (
                      <SwiperSlide key={idx}>
                          <SinglePlan data={each} />
                      </SwiperSlide>
                    )
                ) }
            </Swiper>
          </SwipeWrapper>   
      </AllPlan>
    </Plan>
  )
}

const Plan = styled.div`
  margin-bottom: 30px;
  form{
    width: 90%;
    max-width: 400px;
    margin: 10px auto;
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
  width: 98vw;
  max-width: 1200px;
  margin: auto;
  border: 1px solid red;
  padding: 10px;
`
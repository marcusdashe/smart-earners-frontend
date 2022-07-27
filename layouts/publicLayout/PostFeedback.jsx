import styled from 'styled-components';
import PopUpModal from '../../components/modals/popUpModal/PopUpModal';
import Feedback from '../../components/Feedback';
import Spinner from '../../loaders/Spinner';
import { useState, useEffect, useRef } from "react";
import {useSnap} from '@mozeyinedu/hooks-lab'
import { useDispatch, useSelector } from 'react-redux';
import { postTestimonial } from '../../redux/testimonials/testimonials';



export default function PostFeedback(){
    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    const {post} = state.testimonial
    const {snap} = useSnap()
    const inputRef = useRef()
    const [showModal, setShowModal] = useState(false)
    const [feedback, setFeedback] = useState({
      msg: post.msg,
      status: false
    });

    const initialState = {
      name: '',
      body: ''
    }
    const [inp, setInp] = useState(initialState)
    const getInp =(e)=>{
      const {name, value} = e.target;
      setInp({...inp, [name]:value})
    }

    const submit =(e)=>{
      e.preventDefault();
      dispatch(postTestimonial(inp));
    }

    useEffect(()=>{
      setFeedback({
        msg: post.msg,
        status: true
      });

      if(post.status){
        setInp(initialState)
      }
    }, [post])

    useEffect(()=>{
      setFeedback({
        msg: '',
        status: false
      });
    }, [])

    return (
      <>
        <Btn onClick={()=>setShowModal(true)}>Give us a Feedback?</Btn>
        <PopUpModal title="Feedback" showModal={showModal} setFeedback={setFeedback} setShowModal={setShowModal}>
          <div
            style={{
              width: '80vw',
              maxWidth: '400px',
              padding: '20px',
  
            }}>
    
            <div style={{textAlign: 'center', marginBottom: '10px', fontSize: '.9rem'}}>Your feedback help us to evaluate our services to serve you better</div>

            <form onSubmit={submit}>
                <div style={{display: 'flex', justifyContent: 'center'}}> 
                  <Feedback
                    msg={post.msg}
                    status={post.status}
                    feedback={feedback}
                    setFeedback={setFeedback}
                  />
                </div>
                <InputWrapper>
                    <label>Message</label>
                    <textarea
                      name="body"
                      value={inp.body || ''}
                      onChange={getInp}
                      placeholder="Message of at most 200 characters"
                      maxLength={200}
                      >
                    </textarea>
                </InputWrapper>
                <InputWrapper>
                    <label>Name</label>
                    <input
                      name="name"
                      value={inp.name || ''}
                      onChange={getInp}
                      placeholder="Name"
                    />
                </InputWrapper>
                <div style={{margin: '5px', display: 'flex', justifyContent: 'center'}}>{post.isLoading ? <Spinner size='25px'/> : ""}</div>
                <InputWrapper>
                    <input
                        {...snap()}
                        type='submit'
                        disabled={post.isLoading}
                        value={post.isLoading ? 'Loading...' : 'Submit'}
                    />
                </InputWrapper>
            </form>
          </div>
        </PopUpModal>
      </>
    )
  }
  
const Btn = styled.button`
position: fixed;
padding: 5px;
top: 200px;
left: -50px;
transform: rotate(-90deg);
background:var(--major-color-purest);
z-index: 1000000;
border: none;
cursor: pointer;
color: #ffff;
opacity: .7;

&:hover{
    background:  var(--bright-color);
    color:  #fff;
}


`

const InputWrapper = styled.div`
    width: 100%;
    margin-bottom: 5px;

    label{
        display: block;
        font-size: .9rem;
    }

    textarea{
        width: 100%;
        height: 80px;
        max-height: 250px;
        min-height: 50px;
        resize: vertical;
        padding: 10px;
    }

  input, textarea { width: 100%;
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
  

`
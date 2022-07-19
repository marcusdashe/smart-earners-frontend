import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import Loader_ from "../loader/Loader";
import { getConfig} from "../../../redux/admin/config";
import {
  AdminWrapper,
  Form,
  InputWrapper,
  Container
} from "./styles";



export default function Config({userInfo}) {
  const dispatch = useDispatch()
  const state = useSelector(state=>state);
  const [isLoading, setLoading] = useState(true)
  const {config} = state.config;

  useEffect(()=>{
    setLoading(true)
    dispatch(getConfig())

    setTimeout(()=>{
      config.isLoading ? setLoading(true) : setLoading(false)
    }, 1000)

  }, [])

  console.log(config.data)


  return (
    
    //check if config exist
    isLoading ? 
    (
      // set loading div
      <Loader_ />
    ) :
    (
      //check if empty

      !config.status ? 
      (
          <div style={{textAlign: 'center'}}>No Data Currently Available</div>
      ):
      (
        <AdminWrapper>
            <Form>
                <Container>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                </Container>

                <Container>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                  <InputWrapper>
                      <input type="text" />
                  </InputWrapper>
                </Container>
            </Form>
        </AdminWrapper>
      )
    )    
  )
}

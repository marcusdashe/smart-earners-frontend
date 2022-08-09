import styled from 'styled-components'

const PolicyContainer = styled.div`
    width: 100%;
    min-height: fit-content;
    text-align: justify;

    .inner-layer {
        width: 80%;
        margin: 0px auto;
        padding-top: 80px;
        
    }

    .accept-statement {
      margin: 3rem auto;
      font-size: 1.2rem;
      text-align: center;
      color: #606060;
    }

    .write-ups{
      width: 100%;
      margin: 0 auto;
      font-size: 1.2rem;
      text-align: justify;
      
      p{
        color: #606060;
        margin: 10px;
        /* border: 2px solid red; */
      }
      ul li{
        list-style-type: square;
        margin: 15px;
      }
    }
`

export default PolicyContainer
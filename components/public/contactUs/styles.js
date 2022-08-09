import styled from 'styled-components'


const StyledContact = styled.section`
width: 100%;
height: 100vh;
margin: 0 auto;
background: whitesmoke;

.banner-header {
  width: 100%;
  height: 150px;
  background: var(--major-color-deep);
  color: white;

  figure{
    padding: 10px;
  }
  p{
    text-align: center;
    font-size: 2.5rem;
    @media screen and (max-width: 425px){
      font-size: 2rem;
    }
    padding: 50px 0 0;
    /* border: 2px solid white; */
  }
}

.container .main-content{
  width:80%;
  margin: 0 auto;
  background: white;
  height: fit-content;
  position: relative;
  top: -30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;


  .message-form{
    width: 50%;
    @media screen and (max-width: 425px){
      width: 100%;
    }
    padding: 15px;

    .contact-form{
      width: 100%;
      display: flex;
      flex-flow: column nowrap;

      legend{
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 20px;
        font-weight:600;
      }
      input, textarea, button {
        margin: 5px;
        border: 2px solid #b7b7b7;
        border-radius: 5px;
      }

      input { 
        height: 40px;
        font-size: 1rem;
        padding: 5px;
        
      }

      textarea {
        height: 100px;
        font-size: 1rem;
        padding: 5px;
        color: gray;
      }

      button{
              width: 100%;
              height: 35px;
              outline: none;
              border: none;
              border-radius: 20px;
              background: var(--bright-color);
              color: #fff;
              font-weight: 600;
              font-size: 1.09rem;
              margin: 30px auto;
              display: grid;
              place-items: center;
              box-shadow: rgba(100,100, 100,0.5) 0px 2px 8px 0px;
          }
    }
  }

  .contact-info{
    width: 50%;
    @media screen and (max-width: 425px){
      width: 100%;
    }
    background: white;
    

    .contact-header{
        font-size: 1.5rem;
        text-align: center;
        margin: 20px 0;
        @media screen and (max-width: 425px){
          margin: 10px 0;
      }
        font-weight:600;
    }

  .socials-address {
    address{
      width:80%;
          margin:0  auto 1  00px;
          text-align: center;
    }
    .socials{
    display:flex;
    justify-content: space-around;
    width:70%;
    margin :30px auto;
    
  }
  } 
  } 
}
`

export default StyledContact
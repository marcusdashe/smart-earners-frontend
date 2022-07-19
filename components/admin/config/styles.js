import styled from 'styled-components'


const AdminWrapper = styled.div`
    
    
`
const Form = styled.form`
    width: 100%;
    wight: 100%;
`
const InputWrapper = styled.div`
    min-width: 100px;
    height: 50px;
    justify-self: center;
    margin: 5px;

    input{
        width: 100%;
        height: 100%;
    }
`

const Container = styled.div`
    width: 100%;
    wight: 100%;
    border: 1px solid red;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr));

`


export {
    AdminWrapper,
    Form,
    InputWrapper,
    Container
}
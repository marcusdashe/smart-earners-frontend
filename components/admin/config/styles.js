import styled from 'styled-components';
import { ScrollBar } from '../../../styles/globalStyle';



const AdminWrapper = styled.div`
    border: 1px solid red;
    ${ScrollBar()};

    input, select, option, textarea {
        border: none;
        &:focus {
            outline: none;
            border: none;
        }
    }

    .edit{
        position: absolute;
        top: 0;
        left: 10px;
        border-radius: 4px;
        background: ;
        color: var(--bright-color);
        cursor: pointer;

        &:hover {
            color: var(--major-color-purest);
        }


    }
    
`
const Form = styled.form`
    width: 100%;
    wight: 100%;
    padding: 10px;
`
const InputWrapper = styled.div`
    min-width: 100px;
    min-height: 50px;
    background: #ddd;
    justify-self: center;
    margin: 20px 5px;
    box-shadow: 1px 1px 2px #ccc;

    .item {
        color: #972309;
    }
    
    label{
        width: 100%;
        height: 40px;
        padding: 5px;
        display: block;
        font-size: .8rem;
        background: #f1f1f1;
        font-weight: bold;
        user-select: none;
        -webkit-user-select: none;
    }
    &:hover {
        box-shadow: 2px 2px 3px #999;
    }

    input, select, textarea, option{
        width: 100%;
        height: 50px;
        padding: 5px 20px;
    }
`

const Container = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    display: grid;
    border: 1px solid #f1f1f1;;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr));
    position: relative;
    overflow-y: auto;

    .title{
        position: absolute;
        top: -12px;
        background: #f1f1f1;
        padding: 1px 4px;
        border-radius: 5px;
        left: 30px;
        user-select: none;
        -webkit-user-select: none;
    }

`


export {
    AdminWrapper,
    Form,
    InputWrapper,
    Container
}
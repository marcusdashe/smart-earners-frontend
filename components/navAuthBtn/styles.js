import styled from 'styled-components'

const NavBtn = styled.div`
    display: flex; 
    position: ${({stick})=>stick ? 'static' : 'absolute'};
    right: ${({stick})=>stick ? '' : '20px'};
    color: #fff;
    flex-direction: ${({portriat})=>portriat ? 'column' : 'row'};
    align-items: ${({portriat})=>portriat ? 'center' : 'flex-star'};

    .nav-btn {
        margin: 10px 5px;
        color: var(--bright-color);
        cursor: pointer;

        &:hover{
            opacity: .4
        }
    }

    @media (max-width: 920px){
        display: ${({shrink})=>shrink ? 'flex' : 'none'}
    };

    a {
        font-weight: bold;
        padding: 5px;
        color: #fff;
        

        &: hover {
            opacity: .5
        }
    };

    .logout {
        color: #fff;
        padding: 5px;
    };

    .dashboard {
        border: 2px solid var(--bright-color);
        border-radius: 5px;
        padding: 5px;
        font-size: 3rem;
    };
    .admin {
        border: 2px solid teal;
        border-radius: 5px;
        padding: 5px;
        font-size: 3rem;
    };
`


export {
    NavBtn,
}
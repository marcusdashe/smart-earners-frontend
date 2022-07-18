import styled from 'styled-components'

const MobileMenu_ = styled.div`
    .mobile-screen-view {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .col3 {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;

        .dropDownBtn {
            border: 1px solid #aaa;
            border-radius: 5px;
            cursor: pointer;

            &:hover{
                opacity: .5
            }
        }       
    }

    .sideNav {
        display: flex;
        position: absolute;
        justify-content: center;
        padding: 10px;
        align-items: center;
        let: 50%;
        background: var(--major-color-purest);
        width: 120px;
        top: 40px;  
    }



    .bottom-nav{
        width: 100%;
        z-index: 1000;
        height: 60px;
        bottom: 0;
        left: 0;
        right: 0;
        font-weight: 400;
        color: var(--major-color-purest);
        background: var(--bottom-nav-color);
        position: fixed;
        padding: 0px 30px;
        user-select: none;
        --webkit-user-select: none;
        border-top: 1px solid var(--bright-color);
        display: flex;
        justify-content: space-around;
        align-items: center;

        .linkWrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin: 0 8px;
        }

        .link-icon {
            border-radius : 50%;
            height: 30px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .link{
            margin-top: 0px;
            font-size: .65rem;
        }

        .bottom-link {
            color: var(--major-color-purest);
        }
    }
`


export {
    MobileMenu_
}
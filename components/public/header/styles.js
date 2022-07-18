import styled from "styled-components";

const TopNav = styled.nav`

    width: 100%;
    height: 120px;
    color: #fff;
    background: var(--major-color-purest);
    display: flex;
    align-items: center;
    padding: 2px 30px;
    user-select: none;
    --webkit-user-select: none;


    .togglemenu-wrapper {
        display: none;

        &:hover{
            color: #fff;
        };
        
        @media (max-width: 920px){
            display: flex;
        }
    }

    .logo{
        width: 120px;
        height: 120px;
        display: flex;
        position: absolute;
        left: 30px;
        align-items: center;
        justify-content: center;
        
        @media (max-width: 920px){
            left: 50%;
            transform: translateX(-50%)
        }
    };
`

const MidNav = styled.nav`
    width: 100%;
    height: 70px;
    z-index: 1000;
    position: ${({stick})=>stick ? 'fixed' : ''};
    top: ${({stick})=>stick ? 0 : ''};
    
    .top-mid-nav{
        height: 45px;
        padding: 0 30px;
        background: var(--major-color-purest);
        display: flex;
        justify-content: ${({stick})=>!stick ? 'center' : 'space-between'};
        align-items: center;

        .togglemenu-wrapper { 
            display: none;   
            &:hover{
                color: #fff;
            };
            
            @media (max-width: 920px){
                display: flex;
            }
        }

        .logo-midNav{
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 920px){
                position: absolute;
                left: 50%;
                transform: transalateX(-50%)
            };
        };

        .navLink {
            display: flex;
            color: #fff;

            a {
                padding: 5px;
                display: block;
                font-size: .9rem !important;
                
                &:hover {
                    opacity:.6
                }
            };
            
            .link {
                padding: 0;
                border: none;
                color: #fff;
            }
            .active {
                position: relative;
                display: inline-block;
    
                &:before {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -2px;
                    content: '';
                    width: 100%;
                    height: 2px; 
                    background: var(--bright-color);
                } 
            };

            @media (max-width: 920px){
                display: none
            };
        };
        
    };

    .bottom-mid-nav {
        height 25px;
        padding: 0 20px;
        color: #fff;
        text-align: center;
        box-shadow: 2px 2px 5px #000;
        background: var(--major-color-faded);
    }
      
`

export {
    TopNav,
    MidNav,
}
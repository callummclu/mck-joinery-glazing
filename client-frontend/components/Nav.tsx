import styled from "styled-components"
import MCKLogoBW from '../public/MCK.png'
import JoineryGlazing from '../public/Joinery|Glazing.png'
import {HiMenuAlt2} from 'react-icons/hi'

export const Nav = () => {
    return(
        <>
            <NavBarStyled>
                <LeftFixedDiv>
                    <HiMenuAlt2 size={35} color={'white'}/>
                </LeftFixedDiv>
                
                <LogoDiv/>
                <SubLogoDiv/>
            </NavBarStyled>
        </>
    )
}


const NavBarStyled = styled.div`
    background:rgb(60,60,60);
    width:100%;
    display:flex;
    height:75px;
    justify-content:center;

    @media screen and (min-width: 768px){
        justify-content: flex-start;
    }

`

const LogoDiv = styled.div`
    width:100px;
    background-image: url("${MCKLogoBW.src}");
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (min-width: 768px){
        margin-left: 20px;
    }

`

const SubLogoDiv = styled.div`
    width:150px;
    margin-left: 20px;
    background-image: url("${JoineryGlazing.src}");
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width: 768px){
        display:none;
    }

`

const LeftFixedDiv = styled.div`
    position:absolute;
    left:0;
    top:0;
    margin:20px;

    @media screen and (min-width: 768px){
        display:none;
    }
`
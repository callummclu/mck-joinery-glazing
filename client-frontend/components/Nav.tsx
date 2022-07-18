import styled from "styled-components"
import MCKLogoBW from '../public/MCK.png'
import JoineryGlazing from '../public/Joinery|Glazing.png'
import {HiMenuAlt2} from 'react-icons/hi'
import { useEffect, useState } from "react"

export const Nav = () => {
    
    const [menuToggle, setMenuToggle] = useState(false);

    return(
        <>
            <NavBarStyled>
                <LeftFixedDiv>
                    <HiMenuAlt2 size={35} color={'white'} onClick={()=>setMenuToggle(!menuToggle)}/>
                </LeftFixedDiv>
                {menuToggle && <DropDownMenu>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Gallery</p>
                </DropDownMenu>}
                <LogoDiv/>
                <SubLogoDiv/>
                <RightFixedItems>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Gallery</p>
                </RightFixedItems>
            </NavBarStyled>
        </>
    )
}

const DropDownMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position:absolute;
    width:100%;
    top:75px;
    background:#354B8C;
    color:white;

    @media screen and (min-width: 767px){
        display:none;
    }
`

const RightFixedItems = styled.div`
    color:white;
    position:absolute;
    display:flex;
    align-items:center;
    gap: 20px;
    right: 40px;
    font-size:14px;
    height:75px;

    @media screen and (max-width: 767px){
        display:none;
    }
`

const NavBarStyled = styled.div`
    background:#354B8C;
    width:100%;
    display:flex;
    height:75px;
    justify-content:center;

    @media screen and (min-width: 768px){
        width: calc(100% - 40px);
        padding-left: 40px;
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

    @media screen and (max-width: 767px){
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
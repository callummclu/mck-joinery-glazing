import styled from "styled-components"
import MCKLogoBW from '../public/MCK.png'
import JoineryGlazing from '../public/Joinery|Glazing.png'
import {HiMenuAlt2} from 'react-icons/hi'
import {IoClose} from 'react-icons/io5'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { ContactDetails } from "./appShell"
import Link from "next/link"

export const Nav = (props:ContactDetails) => {
    
    const [menuToggle, setMenuToggle] = useState(false);

    const router = useRouter()

    return(
        <>
            <NavBarStyled>
                <LeftFixedDiv>
                    {!menuToggle ? 
                        <HiMenuAlt2 size={35} color={'white'} onClick={()=>setMenuToggle(!menuToggle)}/>
                        :
                        <IoClose size={35} color={'white'} onClick={()=>setMenuToggle(!menuToggle)}/>
                    }
                </LeftFixedDiv>
                {menuToggle && <DropDownMenu>
                    <p><Link href='/#About-Us'>About Us</Link></p>
                    <p><Link href='/#Contact-Us'>Contact Us</Link></p>
                    <p><a href="gallery">Gallery</a></p>
                </DropDownMenu>}
                <LogoDiv onClick={()=>window.location.href = window.location.origin}/>
                <SubLogoDiv/>
                <RightFixedItems>
                    <p><Link href='/#About-Us'>About Us</Link></p>
                    <p><Link href='/#Contact-Us'>Contact Us</Link></p>
                    <p><a href="gallery">Gallery</a></p>
                </RightFixedItems>
            </NavBarStyled>
            <NavUnder>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
            </NavUnder>
        </>
    )
}

const NavUnder = styled.div`
    width:100%;
    height:30px;
    color:white;
    background:#2a3c70;
    display:flex;
    align-items:center;
    justify-content:space-around;
    @media screen and (max-width: 768px){
        height:60px;
        flex-direction:column;
        & *{
            margin:0;
        }
    }
`

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
    cursor:pointer;
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
    cursor:pointer;

    @media screen and (min-width: 768px){
        display:none;
    }
`
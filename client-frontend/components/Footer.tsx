import styled from "styled-components"
import { MenuItem, MenuItems } from "./menubar"
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { useCallback, useState } from "react";

export interface FooterProps{
    items:MenuItem[];
    phone:string;
    email:string;
}

export const Footer = (props:FooterProps) => {

    return (
        <>        

        <FooterContainer>
            <FooterGrid>
                <div className="grid">
                    <FooterItem className="sitemap">
                        <h3>Sitemap</h3>
                        {props.items.map((e:any)=><p key={e.name}><a href={e.redirect}>{e.name}</a></p>)}
                    </FooterItem>
                    <FooterItem className="contact">
                        <h3>Contact Us</h3>
                        <p>{props.phone}</p>
                        <p>{props.email}</p>
                        <p><BsFacebook style={{padding:"5px"}}/><BsInstagram style={{padding:"5px"}}/></p>
                        <br/>
                        <p>created by callum mcluskey</p>
                    </FooterItem>
                </div>
                
                    
                
            </FooterGrid>
            <FooterBar>Copyright © 2022 MCK Joinery Glazing</FooterBar>
        </FooterContainer>
    </>
    )
}

const FooterItem = styled.div`
    width: calc(100% - 80px);
    padding:40px;
    &.sitemap{grid-area:sitemap;padding-bottom:10px;}
    &.contact{grid-area:contact;padding-bottom:10px;}

    @media screen and (max-width: 1000px){
        text-align:center;
        padding-top:10px;
        padding-bottom:10px;
        height:200px;
    }
`

const FooterGrid = styled.div`
    width:100%;
    display:flex;
    padding-bottom:60px;
    
    align-items:center;
    justify-content:center;

    & h3{
        font-size:32px;
    }

    @media screen and (max-width: 1000px){

        & h3{
            font-size: 22px;
        }

        & p {
            font-size: 13px;
        }

    }

    &>div.grid{
        width:100%;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-template-areas: "sitemap contact";
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas: "sitemap" "contact";
            grid-gap:0px;
        }
    }
`

const FooterContainer = styled.div`
    width:100%;
    height: auto;
    background: #354B8C;
    color:white;
    position:relative;
`

const FooterBar = styled.div`
    width:100%;
    background:#2a3c70;
    color:white;
    height: 30px;
    position:absolute;
    left:0;
    bottom:0;
    text-align:center;
    line-height:30px;
    font-size: 10px;
`
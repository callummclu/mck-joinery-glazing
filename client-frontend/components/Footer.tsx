import styled from "styled-components"
import { MenuItems } from "./menubar"

export const Footer = (props:MenuItems) => {
    return (
        <FooterContainer>
            <FooterGrid>
                <div className="grid">
                    <FooterItem className="sitemap">
                        <h1>Sitemap</h1>
                        {props.items.map((e:any)=><p>{e}</p>)}
                    </FooterItem>
                    <FooterItem className="contact">
                        <h1>Contact Us</h1>
                        <p>phone number</p>
                        <p>email address</p>
                        <p>socials</p>
                        <br/>
                        <p>created by callum mcluskey</p>
                    </FooterItem>
                    <FooterItem className="map">
                    
                            <div></div>
                 
                    </FooterItem>
                </div>
                
                    
                
            </FooterGrid>
            <FooterBar>Copyright © 2022 MCK Joinery Glazing</FooterBar>
        </FooterContainer>
    )
}

const FooterItem = styled.div`
    width: calc(100% - 80px);
    padding:40px;
    &.sitemap{grid-area:sitemap;padding-bottom:10px;}
    &.map{
        display:flex;
        align-items:center;
        justify-content:center;
        
        grid-area:map;
        & div{
            max-width:600px;
            background:gray;
            width:100%;
            height:350px;
        }
    }
    &.contact{grid-area:contact;padding-bottom:10px;}

    @media screen and (max-width: 1000px){
        text-align:center;
    }
`

const FooterGrid = styled.div`
    width:100%;
    display:flex;
    padding-bottom:30px;
    
    align-items:center;
    justify-content:center;

    &>div.grid{
        width:100%;
        display:grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-template-areas: "sitemap contact map map";
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        @media screen and (max-width: 1000px){
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-template-areas: "sitemap" "contact" "map";
            grid-gap:0px;
        }
    }
`

const FooterContainer = styled.div`
    width:100%;
    height: auto;
    background: #D9D9D9;
    position:relative;
`

const FooterBar = styled.div`
    width:100%;
    height: 30px;
    position:absolute;
    left:0;
    bottom:0;
    background:#C0C0C0;
    text-align:center;
    line-height:30px;
`
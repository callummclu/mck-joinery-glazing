import styled from "styled-components"

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterBar>Copyright © 2022 MCK Joinery Glazing</FooterBar>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width:100%;
    height: 400px;
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
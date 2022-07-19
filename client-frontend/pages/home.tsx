import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import styled from 'styled-components'
import { AppShell } from '../components/appShell'
import { Banner } from '../components/Banner'
import { CardContainer } from '../components/cardContainer'
import Contact from '../components/contact'
import { Footer } from '../components/Footer'
import { GrayContainer } from '../components/grayContainer'
import { ImageShowcase, ImageShowcaseObj } from '../components/imageShowcase'
import { MenuBar, MenuItems } from '../components/menubar'


const Home: NextPage = () => {

    const menuItems:MenuItems = {
        items: ["Joinery","Glazing","Fencing","Extensions","More..."]
    }

    const showcaseImages: ImageShowcaseObj = {
        large:"1",
        top:"2",
        bottom:"3"
    }

    const aboutUsText = "dwa vdw auidwabihdwa yvdw iahod wnauibidwandwaio duwabdwna idwajipo dwbaiudwai gudwjaiodwaubiydwauv wadjiod vuyd bausyd wayv awdiodbuwa ydwa vua"


    const TrustpilotWidget = () => {
        return(
            <div className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="62d6dfaead4cf99707edd7ad" data-style-height="24px" data-style-width="100%" data-theme="light" data-without-reviews-preferred-string-id="2">
                <a href="https://uk.trustpilot.com/review/mck-joinery-glazing.vercel.app" target="_blank" rel="noopener">Trustpilot</a>
            </div>
        )
    }

    return (
        <>
        <Script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async>
        </Script>
        <AppShell>
            <Banner trustPilot={<TrustpilotWidget/>}/>
            <GrayContainer>
                <MenuBar {...menuItems}/>
                <ImageShowcase {...showcaseImages}/>
                <CenteredTextDiv id="About-Us">
                    <h1>About Us</h1>
                    <p>{aboutUsText}</p>
                </CenteredTextDiv>
                <CardContainer/>
                <CenteredTextDiv id="Contact-Us">
                    <h1>Contact Us</h1>
                    <p>{aboutUsText}</p>
                </CenteredTextDiv>
                <Contact/>
            </GrayContainer>
            <Footer {...menuItems}/>
        </AppShell>
        </>
    )
}

const CenteredTextDiv = styled.div`
    display:flex;
    
    flex-direction:column;
    align-items:center;
    text-align:center;
    padding-bottom:50px;
    & p{ 
        width:40%;
        min-width: 350px;
    }
    
`

export default Home
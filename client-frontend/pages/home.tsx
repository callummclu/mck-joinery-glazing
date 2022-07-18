import type { NextPage } from 'next'
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

    return (
        <AppShell>
            <Banner/>
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
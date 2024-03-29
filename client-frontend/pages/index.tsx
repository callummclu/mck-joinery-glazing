import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import styled from 'styled-components'
import { AppShell, ContactDetails } from '../components/appShell'
import { Banner } from '../components/Banner'
import {AiFillStar} from 'react-icons/ai'
import { CardContainer } from '../components/cardContainer'
import Contact from '../components/contact'
import { Footer, FooterProps } from '../components/Footer'
import { GrayContainer } from '../components/grayContainer'
import { ImageShowcase, ImageShowcaseObj } from '../components/imageShowcase'
import { MenuBar, MenuItems } from '../components/menubar'

export async function getServerSideProps() {
    const res = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/category`)
    const categories = await res.json()

    const homeRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/homepage`)
    const homePageResult = await homeRes.json()
    const homePage = homePageResult[0]

    const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
    const contactResult = await contactRes.json()
    const contact = contactResult[0]

    return { props: { categories, homePage, contact }}
}

export interface Homepage{
    splashText:string;
    aboutUsText:string;
    contactUsText:string;
    cardTitles:string[];
    cardTexts:string[];
    showcaseImages:string[]
}

export interface Contact{
    number:string;
    email:string;
}

export interface HomepageProps{
    categories:any;
    homePage: Homepage;
    contact: Contact;
}

const Home: NextPage = ({ categories, homePage, contact }:any) => {

    let categoryMapped = categories.map((e:any) => e)

    let category1 = homePage.shownCategories ? homePage!.shownCategories[0] ?? "" : ""
    let category2 = homePage.shownCategories ? homePage!.shownCategories[1] ?? "" : ""

    let menuItems:MenuItems = {
        items: [
            {name:"Glazing",redirect:"gallery/Glazing"},
            {name:"Joinery",redirect:"gallery/Joinery"},
            {name:(category1 ?? ""),redirect:`gallery/${categoryMapped[0].parent}/${categoryMapped[0].type}`},
            {name:(category2 ?? ""),redirect:`gallery/${categoryMapped[1].parent}/${categoryMapped[1].type}`},
            {name:"More...",redirect:"gallery"}
        ]
    }

    !homePage.shownCategories && (menuItems = {
        items: [
            {name:"Glazing",redirect:"gallery/Glazing"},
            {name:"Joinery",redirect:"gallery/Joinery"},
            {name:"More...",redirect:"gallery"}
        ]
    })

    const showcaseImages: ImageShowcaseObj = {
        large:homePage?.showcaseImages[0] ?? "",
        top:homePage?.showcaseImages[1] ?? "",
        bottom:homePage?.showcaseImages[2] ?? ""
    }

    const contactDetails: ContactDetails = {
        phone: contact?.number ?? "",
        email: contact?.email ?? ""
    }

    const footerItems:FooterProps = {
        ...menuItems,
        ...contactDetails
    }

    const aboutUsText = homePage?.aboutUsText ?? ""; 
    const contactUsText = homePage?.contactUsText ?? "";

    const cardDetails = {
        cardTitles:homePage?.cardTitles ?? "",
        cardTexts:homePage?.cardTexts ?? ""
    }

    const TrustpilotWidget = () => {
        return(
            <div className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="62d6dfaead4cf99707edd7ad" data-style-height="24px" data-style-width="100%" data-theme="light" data-without-reviews-preferred-string-id="2">
                <a href="https://uk.trustpilot.com/review/mck-joinery-glazing.vercel.app">Check out Mck Joinery Glazing on <AiFillStar/>Trustpilot</a>
            </div>
        )
    }

    return (
        <>
         <Head>
              <title>MCK Joinery Glazing</title>
              <meta name="trustpilot-one-time-domain-verification-id" content="f4e4fc43-f133-4536-b8f0-83e60f52ed12"/>
        </Head>
        <Script id="trust-pilot" type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async>
        </Script>
              <Script
                id={'gtm'}
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <Script
                id={'ggana'}
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
        <AppShell {...contactDetails}>
            <Banner trustPilot={<TrustpilotWidget/>}/>
            <GrayContainer>
                <MenuBar {...menuItems}/>
                <ImageShowcase {...showcaseImages}/>
                <CenteredTextDiv id="About-Us">
                    <h2>About Us</h2>
                    <p>{aboutUsText}</p>
                </CenteredTextDiv>
                <CardContainer {...cardDetails}/>
                <CenteredTextDiv id="Contact-Us">
                    <h2>Contact Us</h2>
                    <p>{contactUsText}</p>
                </CenteredTextDiv>
                <Contact/>
            </GrayContainer>
            <Footer {...footerItems}/>
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
    & h2 {
        font-size: 32px;
    }
    & p{ 
        width:40%;
        min-width: 350px;
    }
    
`

export default Home
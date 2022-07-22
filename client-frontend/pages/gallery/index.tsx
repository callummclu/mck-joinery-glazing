import type { NextPage } from 'next'
import styled from "styled-components"
import Head from 'next/head'
import { AppShell, ContactDetails } from '../../components/appShell'
import { GrayContainer } from '../../components/grayContainer'
import { useRouter } from 'next/router'
import { Footer, FooterProps } from '../../components/Footer'
import { MenuItems } from '../../components/menubar'
import { ImagesDiv } from './Joinery'

export async function getServerSideProps() {
  const res = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/category`)
  const categories = await res.json()

  const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
  const contactResult = await contactRes.json()
  const contact = contactResult[0]

  const galleryRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/gallery`)
  const galleries = await galleryRes.json()

  return { props: { categories, contact, galleries }}
}

const Gallery: NextPage = ({categories, contact, galleries}:any) => {

  let categoryMapped = categories.map((e:any) => e)
  let galleryImagesMapped = galleries.map((e:any)=><ImageGalleryDiv key={e.id} style={{backgroundImage:`url("${e.image}")`}}/>).reverse()

      const menuItems:MenuItems = {
        items: [
            {name:"Glazing",redirect:"gallery/Glazing"},
            {name:"Joinery",redirect:"gallery/Joinery"},
            {name:categoryMapped[0].type,redirect:`gallery/${categoryMapped[0].parent}/${categoryMapped[0].type}`},
            {name:categoryMapped[1].type,redirect:`gallery/${categoryMapped[1].parent}/${categoryMapped[1].type}`},
            {name:"More...",redirect:"gallery"}
        ]
    }

    const contactDetails: ContactDetails = {
        phone: contact.number,
        email: contact.email
    }

    const footerItems:FooterProps = {
        ...menuItems,
        ...contactDetails
    }
  
  let router = useRouter()

  const categoriesMapped = categories.map((e:any) => <CategoryDiv key={e.parent+e.type} onClick={()=>router.push(`gallery/${e.parent}/${e.type}`)}>{e.type}</CategoryDiv>)


  return(
    <>
    <Head>
      <title>MCK - Gallery</title>
    </Head>
      <AppShell phone={contact.number} email={contact.email}>
        <WhiteBanner>
          <h1>Gallery</h1>
          <p>Choose a category below.</p>
        </WhiteBanner>
        
        <GrayContainer>
          <FiltersDiv>
            <CategoryContainer>
              {categoriesMapped}
            </CategoryContainer>
          </FiltersDiv>
          <ImagesDiv>
            {galleryImagesMapped}
          </ImagesDiv>
        </GrayContainer>
        <Footer {...footerItems}/>
      </AppShell>
    </>
    )
}

export const FiltersDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

export const CategoryContainer = styled.div`
  padding-top:20px;
  max-width: 800px;
  width:80%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;

`

export const CategoryDiv = styled.span`
  background:lightgray;
  margin:10px;
  padding:20px;
  padding-top:12.5px;
  padding-bottom:12.5px;
  border-radius:25px;
  cursor:pointer
  `

export const WhiteBanner = styled.div`

  height:150px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  flex-direction:column;

  & h1, & p{
    margin:5px;
    padding-left:20px;
    padding-right:20px;
  }
`

export const ImageGalleryDiv = styled.div`
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
`

export default Gallery

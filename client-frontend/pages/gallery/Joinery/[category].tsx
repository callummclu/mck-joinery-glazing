import type { NextPage } from 'next'
import styled from "styled-components"
import {TbBrandGithub} from 'react-icons/tb'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppShell, ContactDetails } from '../../../components/appShell'
import { CategoryContainer, CategoryDiv, FiltersDiv, ImageGalleryDiv, WhiteBanner } from '..'
import { GrayContainer } from '../../../components/grayContainer'
import { Footer, FooterProps } from '../../../components/Footer'
import { MenuItems } from '../../../components/menubar'
import { ImagesDiv } from '.'
import { ImSad } from 'react-icons/im'

export async function getServerSideProps(context:any) {

    const res = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/category`)
    const categories = await res.json()
  
    const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
    const contactResult = await contactRes.json()
    const contact = contactResult[0]

    const galleryRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/gallery/all/${context.params.category}`)
    const galleries = await galleryRes.json()
  
  
    return { props: { categories, contact,galleries }}
  }

const SingleCategory: NextPage = ({ categories,contact,galleries}:any) => {
    const router:any = useRouter()
    const {category}:any = router.query

    const singleCategory = categories.filter((e:any)=> e.type == category)

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
  

  return(
    <>
    <Head>
    <title>MCK - {category}</title>
    </Head>
      <AppShell phone={contact.number} email={contact.email}>
        <WhiteBanner>
          <h1>{category}</h1>
          <p>{singleCategory[0].commentary}</p>
        </WhiteBanner>
        
        <GrayContainer>
        <div style={{minHeight:"200px",textAlign:"center",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

        {galleryImagesMapped.length>0 ? <ImagesDiv>
          {galleryImagesMapped}
          </ImagesDiv> :<><ImSad size={64}/><p>There are no images here...</p></>}
          </div>
        </GrayContainer>
        <Footer {...footerItems}/>
      </AppShell>
    </>
    )
}

export default SingleCategory

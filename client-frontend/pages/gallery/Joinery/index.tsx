import type { NextPage } from 'next'
import styled from "styled-components"
import {TbBrandGithub} from 'react-icons/tb'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppShell, ContactDetails } from '../../../components/appShell'
import { CategoryContainer, CategoryDiv, FiltersDiv, WhiteBanner } from '..'
import { GrayContainer } from '../../../components/grayContainer'
import { MenuItems } from '../../../components/menubar'
import { Footer, FooterProps } from '../../../components/Footer'

export async function getServerSideProps() {

  const res = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/category`)
  const categories = await res.json()

  const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
  const contactResult = await contactRes.json()
  const contact = contactResult[0]

  return { props: { categories, contact }}
}

const Joinery: NextPage = ({ categories,contact}:any) => {
  
    let router = useRouter()

    const categoriesMapped = categories.filter((cat:any)=>cat.parent === "Joinery").map((e:any) => <CategoryDiv key={e.parent+e.type} onClick={()=>router.push(`${e.parent}/${e.type}`)}>{e.type}</CategoryDiv>)
  
    let categoryMapped = categories.map((e:any) => e)


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
      <AppShell phone={contact.number} email={contact.email}>
        <WhiteBanner>
          <h1>Joinery</h1>
          <p>Choose a category below.</p>
        </WhiteBanner>
        
        <GrayContainer>
          <FiltersDiv>
            <CategoryContainer>
              {categoriesMapped}
            </CategoryContainer>
          </FiltersDiv>
          <ImagesDiv>
          <div/><div/><div/><div/><div/>
          </ImagesDiv>
        </GrayContainer>
        <Footer {...footerItems}/>
      </AppShell>
    </>
    )
}

export const ImagesDiv = styled.div`
  display:flex;
  flex-wrap:wrap;

  gap:25px;
  width:100%;
  justify-content:center;
  align-items:center;

  & div{
    width: 350px;
    height: 200px;
    background:gray;
    border-radius:10px;
  }
  padding-bottom:25px;
  padding-top:25px;

`

export default Joinery
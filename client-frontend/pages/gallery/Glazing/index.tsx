import type { NextPage } from 'next'
import styled from "styled-components"
import {TbBrandGithub} from 'react-icons/tb'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppShell } from '../../../components/appShell'
import { CategoryContainer, CategoryDiv, FiltersDiv, WhiteBanner } from '..'
import { GrayContainer } from '../../../components/grayContainer'

export async function getServerSideProps() {

  const res = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/category`)
  const categories = await res.json()

  const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
  const contactResult = await contactRes.json()
  const contact = contactResult[0]

  return { props: { categories, contact }}
}

const Glazing: NextPage = ({ categories,contact}:any) => {
  
    let router = useRouter()

    const categoriesMapped = categories.filter((cat:any)=>cat.parent === "Glazing").map((e:any) => <CategoryDiv key={e.parent+e.type} onClick={()=>router.push(`gallery/${e.parent}/${e.type}`)}>{e.type}</CategoryDiv>)
  
  


  return(
    <>
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
        </GrayContainer>
      </AppShell>
    </>
    )
}

export default Glazing

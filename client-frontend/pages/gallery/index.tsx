import type { NextPage } from 'next'
import styled from "styled-components"
import {TbBrandGithub} from 'react-icons/tb'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { AppShell } from '../../components/appShell'
import { Banner } from '../../components/Banner'
import { GrayContainer } from '../../components/grayContainer'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const res = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/category`)
  const categories = await res.json()

  const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
  const contactResult = await contactRes.json()
  const contact = contactResult[0]

  return { props: { categories, contact }}
}

const Gallery: NextPage = ({categories, contact}:any) => {
  
  let router = useRouter()

  const categoriesMapped = categories.map((e:any) => <CategoryDiv key={e.parent+e.type} onClick={()=>router.push(`gallery/${e.parent}/${e.type}`)}>{e.type}</CategoryDiv>)


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

export const FiltersDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

export const CategoryContainer = styled.div`
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
  height:350px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  flex-direction:column;
`

export default Gallery

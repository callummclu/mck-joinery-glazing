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

const SingleCategory: NextPage = ({ categories,contact}:any) => {
    const router:any = useRouter()
    const {category}:any = router.query

    const singleCategory = categories.filter((e:any)=> e.type == category)
  return(
    <>
      <AppShell phone={contact.number} email={contact.email}>
        <WhiteBanner>
          <h1>{category}</h1>
          <p>{singleCategory[0].commentary}</p>
        </WhiteBanner>
        
        <GrayContainer>
          
        </GrayContainer>
      </AppShell>
    </>
    )
}

export default SingleCategory

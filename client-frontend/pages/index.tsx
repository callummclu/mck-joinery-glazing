import type { NextPage } from 'next'
import styled from "styled-components"
import {TbBrandGithub} from 'react-icons/tb'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  return(
    <>
      <div className={styles.pageUnderConstructionContainer}>
          <InfoDiv className={styles.revCamo}>
              <h1>MCK Joinery Glazing</h1>
              <p>Site is currently under construction come back soon</p>
          </InfoDiv>
          <SiteCreatorDiv className={styles.revCamo}>
              <p>Created by Callum Mcluskey</p>
              <TbBrandGithub onClick={_=>window.location.replace('http://www.github.com/callummclu')}/>
          </SiteCreatorDiv>
      </div>
    </>
    )
}

const InfoDiv = styled.div`
  max-width:90%;
  padding-left:50px;
  padding-right:50px;
  width:300px;
  & h1, p {
    color:white;
    
  }
`

const SiteCreatorDiv = styled.div`
  position:fixed;
  color:white;
  right:0;
  bottom:0;
  padding-right:20px;
  padding-left:20px;
  padding-top:2.5px;
  padding-bottom:2.5px;
  display:flex;
  align-items:center;
  &>p{
    margin:0;
    padding-right: 10px;
  }
  &>svg:hover{
    cursor:pointer;
  }
`

export default Home

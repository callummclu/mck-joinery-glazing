import { BsCloud, BsHammer, BsNut } from "react-icons/bs"
import styled from "styled-components"
import { Card, CardProps } from "./card"

export const CardContainer = (props:any) => {

    const card1:CardProps = {
        icon:<BsCloud size={64}/>,
        title:props.cardTitles[0],
        subtext:props.cardTexts[0]
    } 

    const card2:CardProps = {
        icon:<BsHammer size={64}/>,
        title:props.cardTitles[1],
        subtext:props.cardTexts[1]
    } 

    const card3:CardProps = {
        icon:<BsNut size={64}/>,
        title:props.cardTitles[2],
        subtext:props.cardTexts[2]
    } 

    return(
        <ContainingDiv>
            <div style={{"overflow": "hidden"}}>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: '#F8F8F8', width: '122%', height: 167, transform: 'scaleX(-1)' }}
                >
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </svg>

            <CardHolder>
                <Card {...card1}/>
                <Card {...card2}/>
                <Card {...card3}/>
            </CardHolder>
            

            <div style={{"overflow": "hidden", "marginBottom": "-5px"}}>
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: '#F8F8F8', width: '122%', height: 167, transform: 'rotate(180deg) scaleX(-1)' }}
                >
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </svg>
                </div>
            </div>
        </ContainingDiv>
    )
}

const ContainingDiv = styled.div`
    width:100%;
    min-height: 300px;
    background:white;
    margin-bottom:50px;
`

const CardHolder = styled.div`
    margin-top:50px;

    display:flex;
    gap:50px;
    flex-direction:column;
    align-items:center;
`
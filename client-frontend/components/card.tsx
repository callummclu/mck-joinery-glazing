import { BsBook } from "react-icons/bs"
import styled from "styled-components"

export interface CardProps{
    icon:any;
    title:string;
    subtext:string;
}

export const Card = ({icon,title,subtext}:CardProps) => {
    return(
        <CardContainer>
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                <h1>{title}</h1>
                <p>{subtext}</p>
            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width:80%;
    height:200px;
    background:white;
    box-shadow: 0 0 5px 0px lightgray;
    border-radius:10px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: "icon text text text";

    & *{
        display:flex;
        justify-content:center;
        flex-direction:column;

        & h1, & p{
            margin:0;
        }
    }

    & .icon{
        grid-area:icon;
        align-items:center;
    }

    & .text{
        grid-area:text;
    }

    @media screen and (max-width:768px){
        height:300px;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: "icon" "text";

        & .text{
            text-align:center;
            padding-left:20px;
            padding-right:20px;
        }

        & .icon{

            padding-top:40px;
        }
    }
`
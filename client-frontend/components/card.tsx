import styled from "styled-components"

export const Card = () => {
    return(
        <CardContainer/>
    )
}

const CardContainer = styled.div`
    width:80%;
    height:200px;
    background:darkgray;

    @media screen and (max-width:768px){
        height:400px;
    }
`
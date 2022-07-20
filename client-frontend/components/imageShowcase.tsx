import styled from "styled-components"

export interface ImageShowcaseObj{
    large:string;
    top:string;
    bottom:string;
}

export const ImageShowcase = (props:ImageShowcaseObj) => {
    return (
        <div style={{display:"flex","alignItems":"center","justifyContent":"center"}}>
            <CenterDiv>
                <ImageDiv>
                    <ImageContainerBig style={{backgroundImage: `url("${props.large}")` }}/>
                    <ImageContainerSmall style={{backgroundImage: `url("${props.top}")` }} className="top"/>
                    <ImageContainerSmall style={{backgroundImage: `url("${props.bottom}")` }} className="bottom"/>
                </ImageDiv>
            </CenterDiv>
        </div>
    )
}

const CenterDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    max-width:1600px;
`

const ImageDiv = styled.div`
    height:600px;
    width:calc(90%);
    max-width:1600px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: "large large large large large top top top"
                         "large large large large large bottom bottom bottom";
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding:60px;

    @media screen and (max-width: 1100px){
        height:auto;
        grid-column-gap: 0px !important;
        width:100%;
        grid-template-columns: 1fr !important;
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas: "large"
                             "top"
                             "bottom";
        
    }

`

const ImageContainerBig = styled.div`
    grid-area: large;
    width: 100%;
    max-height:600px;
    height:100%;
    background:darkgray;
    background-size:cover;
    background-position:center;
    
    @media screen and (max-width: 1100px){
        max-height: 100000px;
        width: calc(100%);
        height: calc(calc(calc(100vw - 140px) * 9) / 16);
    }
`

const ImageContainerSmall = styled.div`
    width:100%;
    height:100%;
    height:100%;
    background:darkgray;
    background-size:cover;
    background-position:center;

    @media screen and (max-width: 1100px){
        max-height: 100000px;
        width: calc(100%);
        height: calc(calc(calc(100vw - 140px) * 9) / 16);
    }

    &.top{
        grid-area: top; 
    }

    &.bottom{
        grid-area: bottom;
    }
`
import styled from "styled-components"

export const Banner = ({trustPilot}:any) => {
    return (
        <BannerDiv>
            <h1 translate="no">MCK JOINERY GLAZING</h1>
            <p>Quality work that speaks for itself.</p>
            <div className="trust-pilot">
                {trustPilot}
            </div>
        </BannerDiv>
    )
}

const BannerDiv = styled.div`
    height: 350px;
    width:100%;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    & h1{

        font-size: 40px;
        margin:0;
        margin-bottom:10px;
    }

    & p{
        font-size: 20px;
        margin:0;
        margin-bottom: 50px;
    }   

    & .trust-pilot{
        width:100%;
    }

    & .trust-pilot a{
        color:black !important;
    }

`
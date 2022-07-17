import styled from "styled-components"

export const Banner = () => {
    return (
        <BannerDiv>
            <h1>MCK JOINERY GLAZING</h1>
            <p>Quality work that speaks for itself.</p>
            <div>
                <a>trustpilot div</a>
            </div>
        </BannerDiv>
    )
}

const BannerDiv = styled.div`
    height: 350px;
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

`
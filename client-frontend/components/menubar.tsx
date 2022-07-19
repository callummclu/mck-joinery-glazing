import styled from "styled-components"
import {IoIosArrowDown} from 'react-icons/io'

export interface MenuItems{
    items:string[]
}

export const MenuBar = (props:MenuItems) => {
    return (
        <MenuDiv>
            {props.items.map((e:any)=><div key={e}><p key={`${e}`}>{e}</p><IoIosArrowDown key={e}/></div>)}
            <Button>View Gallery</Button>
        </MenuDiv>
    )
}

const Button = styled.button`
    background:#354B8C;
    color:white;
    border:0;
    padding:20px;
    margin-top: 25px;
    border-radius: 40px;
    padding-left:25px;
    padding-right:25px;
    font-size:18px;
`

const MenuDiv = styled.div`
overflow-x:hidden;
    width:calc(100% - 40px);
    height:50px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;

    & div{
        display:flex;
        margin:0;
        line-height:0;
        justify-content:center;
        align-items:center;
        gap:5px;
    }

    & p{
        margin:0;
        padding:0;
    }

    & button{
        display:none;
    }


    @media screen and (max-width:768px){
        height: 90px;
        & div{
            display:none;

        }
        & button{
            display:block;
        }
    }

`
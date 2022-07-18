import styled from "styled-components"
import {IoIosArrowDown} from 'react-icons/io'

export interface MenuItems{
    items:string[]
}

export const MenuBar = (props:MenuItems) => {
    return (
        <MenuDiv>
            {props.items.map((e:any)=><div><p key={e}>{e}</p><IoIosArrowDown/></div>)}
        </MenuDiv>
    )
}

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

`
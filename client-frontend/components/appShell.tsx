import styled from "styled-components"
import { Nav } from "./Nav"
import { ScrollToTop } from "./ScrollToTop"

export interface ContactDetails{
    phone:string;
    email:string;
    children?: any;
}

export const AppShell = (props:ContactDetails) => {
    return(
        <AppShellContainer>
            <Nav phone={props.phone} email={props.email}/>
            {props.children}
            <ScrollToTop/>
        </AppShellContainer>
    )
}

const AppShellContainer = styled.div`
    width:100%;

`
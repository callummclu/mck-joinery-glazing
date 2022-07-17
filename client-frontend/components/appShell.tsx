import styled from "styled-components"
import { Nav } from "./Nav"
import { ScrollToTop } from "./ScrollToTop"

export const AppShell = (props:any) => {
    return(
        <AppShellContainer>
            <Nav/>
            {props.children}
            <ScrollToTop/>
        </AppShellContainer>
    )
}

const AppShellContainer = styled.div`
    height:3000px;
`
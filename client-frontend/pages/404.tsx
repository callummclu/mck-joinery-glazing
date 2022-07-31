import Link from 'next/link'
import styled from 'styled-components'
import { AppShell, ContactDetails } from '../components/appShell'
import { Footer, FooterProps } from '../components/Footer'
import { MenuItems } from '../components/menubar'

export const FourOhFour = ({homePage,contact,categories}:any) => {

  const contactDetails = {
    phone: "07857 073653",
    email: "mckjoinery.glazing@gmail.com"
  }

  return(
    <>
      <AppShell {...contactDetails}>
        <F04>
          <h1>404 - Page Not Found</h1>
          <Link href="/">
            <a>
              Go back home
            </a>
          </Link>
        </F04>
      </AppShell>
    </>
  )
}

const F04 = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:calc(100vh - 110px);
  flex-direction:column;
  & a{
    color:darkblue;
  }
` 

export default FourOhFour
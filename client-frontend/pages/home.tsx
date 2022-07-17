import type { NextPage } from 'next'
import { AppShell } from '../components/appShell'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { GrayContainer } from '../components/grayContainer'


const Home: NextPage = () => {
    return (
        <AppShell>
            <Banner/>
            <GrayContainer>

            </GrayContainer>
            <Footer/>
        </AppShell>
    )
}

export default Home
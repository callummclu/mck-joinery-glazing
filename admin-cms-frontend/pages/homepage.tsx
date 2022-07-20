import type { NextPage } from 'next'
import { Timeline, Text, Container,Button,Title,Divider, TextInput, Textarea } from '@mantine/core';
import { BsImage } from 'react-icons/bs'
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { Nav } from '../components/navbar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export async function getServerSideProps() {
    const homeRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/homepage`)
    const homePageResult = await homeRes.json()
    const homePage = homePageResult[0]

    return { props: {  homePage }}
}


export const Homepage: NextPage = ({ homePage }:any) => {


	return (
	<>
  <Nav>
    <Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Welcome to Homepage</Title>
						<Text size="sm" color="darkgray">Edit Below</Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
                <h2>Title subtext's</h2>
				<TextInput label="Under Title Text" defaultValue={homePage.splashText}/>
                <TextInput label="About Us Text" defaultValue={homePage.aboutUsText}/>
                <TextInput label="Contact Us Text" defaultValue={homePage.contactUsText}/>
                <h2>Cards</h2>
                <h4>Card 1</h4>
                <TextInput label="Title" defaultValue={homePage.cardTitles[0]}/>
                <TextInput label="Text" defaultValue={homePage.cardTexts[0]}/>
                <h4>Card 2</h4>
                <TextInput label="Title" defaultValue={homePage.cardTitles[1]}/>
                <TextInput label="Text" defaultValue={homePage.cardTexts[1]}/>
                <h4>Card 3</h4>
                <TextInput label="Title" defaultValue={homePage.cardTitles[2]}/>
                <TextInput label="Text" defaultValue={homePage.cardTexts[2]}/>
                <h2>Showcase Images</h2>
                <TextInput label="Image 1" defaultValue={homePage.showcaseImages[0]}/>
                <TextInput label="Image 2" defaultValue={homePage.showcaseImages[1]}/>
                <TextInput label="Image 3" defaultValue={homePage.showcaseImages[2]}/>

               
				
				<Button my="md" mr="md">Save</Button>
    </Container>
    </Nav>
    </>
	)
}

export default withPageAuthRequired(Homepage)

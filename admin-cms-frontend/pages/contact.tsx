import type { NextPage } from 'next'
import { Timeline, Text, Container,Button,Title,Divider, TextInput, Textarea } from '@mantine/core';
import { BsImage } from 'react-icons/bs'
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { Nav } from '../components/navbar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export async function getServerSideProps() {
    const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
    const contactResult = await contactRes.json()
    const contact = contactResult[0]

    return { props: {  contact }}
}

export const Contact: NextPage = ({contact}:any) => {
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
                <TextInput label="Phone Number" defaultValue={contact.number}/>
                <TextInput label="Email Address" defaultValue={contact.email}/>

				<Button my="md" mr="md">Save</Button>
    </Container>
    </Nav>
    </>
	)
}

export default withPageAuthRequired(Contact)

import type { NextPage } from 'next'
import { Timeline, Text, Container,Button,Title,Divider, TextInput, Textarea } from '@mantine/core';
import { BsImage } from 'react-icons/bs'
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { Nav } from '../components/navbar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRef } from 'react';

export async function getServerSideProps() {
    const contactRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact`)
    const contactResult = await contactRes.json()
    const contact = contactResult[0]

    return { props: {  contact }}
}

export const Contact: NextPage = ({contact}:any) => {

	const numberRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)

	const SaveItem = ()=>{
		let number = numberRef
		let email = emailRef

		fetch(`https://mck-joinery-glazing-backend.herokuapp.com/contact/${contact.id}`,{
			method:"POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				number: number!.current!.value,
				email: email!.current!.value
			})
		})
			.then(async (res:any)=>{
				window.location.replace(`${window.location.origin}`)
			})
	}

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
                <TextInput ref={numberRef} label="Phone Number" defaultValue={contact.number}/>
                <TextInput ref={emailRef} label="Email Address" defaultValue={contact.email}/>

				<Button onClick={SaveItem} my="md" mr="md">Save</Button>
    </Container>
    </Nav>
    </>
	)
}

export default withPageAuthRequired(Contact)

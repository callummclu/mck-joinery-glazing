import type { NextPage } from 'next'
import { Timeline, Text, Container,Button,Title,Divider } from '@mantine/core';
import { CgWebsite } from 'react-icons/cg'
import { BsImage } from 'react-icons/bs'
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { Nav } from '../components/navbar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const Index: NextPage = () => {
	return (
	<>
  <Nav>
    <Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Welcome to Admin Portal</Title>
						<Text size="sm" color="darkgray">Choose a Section</Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<Button 
					onClick={()=>window.location.href = window.location.origin + "/gallery"}
					variant="default" 
					fullWidth
					leftIcon={<BsImage size={16}/>}
					mb="lg"
				>
					Gallery
				</Button>
				<Button 
					onClick={()=>window.location.href = window.location.origin + "/homepage"}
					variant="default" 
					fullWidth
					leftIcon={<IoHomeOutline size={16}/>}
					mb="lg"
				>
					Homepage
			</Button>
			<Button 
					onClick={()=>window.location.href = window.location.origin + "/contact"}
					variant="default" 
					fullWidth
					leftIcon={<IoPersonOutline size={16}/>}
					mb="lg"
				>
					Contact
			</Button>
			<Button 
					onClick={()=>window.location.href = "http://mckjoineryglazing.co.uk"}
					variant="default" 
					fullWidth
					leftIcon={<CgWebsite size={16}/>}
					mb="lg"
				>
					View main site
			</Button>
    </Container>
    </Nav>
    </>
	)
}

export default withPageAuthRequired(Index)

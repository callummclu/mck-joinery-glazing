import type { NextPage } from 'next'
import { Timeline, Text, Container,Button,Title,Divider } from '@mantine/core';
import { BsImage } from 'react-icons/bs'
import { Nav } from '../components/navbar';

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
							>
								Gallery
							</Button>
    </Container>
    </Nav>
    </>
	)
}

export default Index
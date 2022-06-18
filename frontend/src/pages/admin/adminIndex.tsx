import { Timeline, Text, Container,Button } from '@mantine/core';


export const AdminIndex = () => {

	return (
	<>
    <Container>
    	<h1>Welcome to Admin Portal</h1>
    	<p>Choose a Section...</p>
    	<Button onClick={()=>window.location.href = window.location + "categories/gallery"}>Gallery</Button>
    </Container>
    </>
	)
}
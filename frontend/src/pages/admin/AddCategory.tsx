import { Container, Title, Text, Divider, TextInput, Button} from '@mantine/core'
import React, {useState, useEffect, useRef} from 'react'

export const AddCategory = () => {

	const typeRef = useRef<any>()

	const SaveCategory = () => {
		let type:any = typeRef
		fetch(`http://localhost:8080/category/add`,{
			method:"POST",
			headers:{
				'Content-Type':'application/json'
			},
			body:type!.current.value
			
		})
	}

	return (
		<>
			<Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Add Category</Title>
						<Text size="sm" color="darkgray">Add a category</Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<TextInput ref={typeRef} label="Title" />
				<Button onClick={SaveCategory} my="md" mr="md">Save Changes</Button>
				<Button onClick={()=>window.location.href = (window.location.origin + 'categories/gallery')} my="md" variant="outline">Cancel Changes</Button>
			</Container>
		</>
	)
}
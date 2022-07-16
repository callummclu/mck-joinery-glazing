import { Container, Title, Text, Divider, TextInput, Button, Select} from '@mantine/core'
import React, {useState, useEffect, useRef} from 'react'

export const AddCategory = () => {

	const typeRef = useRef<any>()
	const commentaryRef = useRef<any>()
	const parentCategoryRef = useRef<any>()

	const SaveCategory = () => {
		let type:any = typeRef
		let commentary:any = commentaryRef
		let parent:any = parentCategoryRef
		fetch(`http://localhost:8080/category/add`,{
			method:"POST",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				type:type!.current.value,
				commentary:commentary!.current.value,
				parent: parent!.current.value
			})
			
		}).then(()=>{
			window.location.replace(window.location.origin+'/gallery')
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
				<TextInput ref={commentaryRef} label="Commentary" />
			 	<Select
			 		ref={parentCategoryRef}
					label="Pick a Parent Category"
					placeholder=""
					data={[
						{ value: 'glazing', label: 'Glazing' },
						{ value: 'joninery', label: 'Joinery' }
					]}
			    />
				<Button onClick={SaveCategory} my="md" mr="md">Save Changes</Button>
				<Button onClick={()=>window.location.href = (window.location.origin + '/gallery')} my="md" variant="outline">Go Back</Button>
			</Container>
		</>
	)
}
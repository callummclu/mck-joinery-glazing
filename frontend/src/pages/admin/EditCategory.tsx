import { Container, Title, Text, Divider, TextInput, Button, Select} from '@mantine/core'
import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
export const EditCategory = () => {

	const { id } = useParams()

	const typeRef = useRef<any>()
	const commentaryRef = useRef<any>()
	const parentCategoryRef = useRef<any>()

	const [originalData, setOriginalData] = useState<any>()

	useEffect(()=>{
		fetch(`http://localhost:8080/category/${id}`)
			.then(async (res:any)=>{
				let res_json = await res.json()
				setOriginalData(res_json)
		})	
	},[])

	const SaveCategory = () => {
		let type:any = typeRef
		let commentary:any = commentaryRef
		let parent:any = parentCategoryRef

		fetch(`http://localhost:8080/category/edit/${id}`,{
			method:"POST",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				type:type!.current.value,
				commentary:commentary!.current.value,
				parent:parent!.current.value ?? originalData?.parent
			})
			
		})
	}

	return (
		<>
			<Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Edit Category</Title>
						<Text size="sm" color="darkgray">Edit a category</Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<form onSubmit={SaveCategory}>
				<TextInput defaultValue={originalData?.type} ref={typeRef} label="Title" />
				<TextInput defaultValue={originalData?.commentary} ref={commentaryRef} label="Commentary" />
				<Select
					required
			 		ref={parentCategoryRef}
					label="Pick a Parent Category"
					placeholder={originalData?.parent}
					data={[
						{ value: 'Glazing', label: 'Glazing' },
						{ value: 'Joninery', label: 'Joinery' }
					]}
			    />
				<Button type="submit" my="md" mr="md">Save Changes</Button>
				<Button onClick={()=>window.location.href = window.location.origin + '/gallery'} my="md" variant="outline">Cancel Changes</Button>
				</form>
			</Container>
		</>
	)
}
import React, {useState, useEffect} from 'react'
import { Button, Container, Title, Text, Divider,Stack,Group } from '@mantine/core'

export const GalleryCategories = () => {

	const [categories, setCategories] = useState<any>()

	useEffect(()=>{
		fetch(`http://localhost:8080/category`)
			.then(async (res:any)=> {	
				let res_json = await res.json()
				setCategories(res_json)
			})
	},[])

	const removeCategory = (id:string) => {
		fetch(`http://localhost:8080/category/${id}`,{
			method:"DELETE"
		}).then(async (res:any)=> {
			let res_json = await res.json()
			setCategories(res_json)
		})
	}

	const editCategory = (id:string) => {
		console.log(`edit: ${id}`)
	}

	return (
		<>
			<Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Categories</Title>
						<Text size="sm" color="darkgray">Choose a category</Text>
					</div>
					<Button onClick={()=>window.location.href = window.location.origin + '/category/add'} mt="md">Add Category</Button>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
					label={`${categories?.length} results`}
					labelPosition="center"
				/>
				<Stack>
			{categories?.map((e:any)=><Group><Button style={{flexGrow:1}} variant="outline" onClick={()=>window.location.href = (window.location+'/'+e.type)}>{e.type}</Button><Button onClick={()=>window.location.href = (window.location.origin+'/category/edit/'+e.id)} color="gray">Edit</Button><Button onClick={()=>removeCategory(e.id)} color="red">Delete</Button></Group>)}
			</Stack>
			</Container>
		</>
	)
}
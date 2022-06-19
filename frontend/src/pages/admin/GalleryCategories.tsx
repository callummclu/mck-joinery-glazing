import React, {useState, useEffect} from 'react'
import { Button, Container, Title, Text, Divider,Stack } from '@mantine/core'

export const GalleryCategories = () => {

	const [categories, setCategories] = useState<any>()

	useEffect(()=>{
		fetch(`http://localhost:8080/category`)
			.then(async (res:any)=> {	
				let res_json = await res.json()
				setCategories(res_json)
			})
	},[])

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
			{categories?.map((e:any)=><Button variant="outline" onClick={()=>window.location.href = (window.location+'/'+e.type)}>{e.type}</Button>)}
			</Stack>
			</Container>
		</>
	)
}
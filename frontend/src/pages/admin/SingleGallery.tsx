import {Container, Title, Text, Divider, Image,Center, TextInput, Textarea, Button} from '@mantine/core'
import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

export const EditSingleGallery = (props:any) => {

	const { id } = useParams()

	const [itemData, setItemData] = useState<any>()

	useEffect(()=>{
		fetch(`http://localhost:8080/gallery/${id}`)
			.then(async (res:any)=>{
				let res_json = await res.json()
				setItemData(res_json)
			})
	},[])

	return (
		<>
			<Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">{itemData?.title}</Title>
						<Text size="sm" color="darkgray">{id}</Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<Center my="xl" style={{display:"flex",flexWrap:"wrap"}}>
 					<Image p="xs" width={350} height={280} src={""} withPlaceholder/>
				</Center>

				<TextInput label="Title" defaultValue={itemData?.title} />
				<Textarea label="Description" defaultValue={itemData?.description}/>
				<Button my="md" mr="md">Save Changes</Button>
				<Button my="md" variant="outline">Cancel Changes</Button>
			</Container>
		</>
	)
}

export const AddSingleGallery = () => {
	return (
		<>
			<Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Add an Image</Title>
						<Text size="sm" color="darkgray"></Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<Center my="xl" style={{display:"flex",flexWrap:"wrap"}}>
 					<Image p="xs" width={350} height={280} src={""} withPlaceholder/>
				</Center>

				<TextInput label="Title"/>
				<Textarea label="Description"/>
				<Button my="md" mr="md">Add Item</Button>
			</Container>
		</>
	)
}
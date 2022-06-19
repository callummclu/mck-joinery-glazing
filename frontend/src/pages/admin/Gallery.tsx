import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Container, Divider, Center, Pagination, Grid, Image, Button, Text, Title, Stack} from '@mantine/core'
import {GalleryItem} from '../../types/Client/GalleryTypes'
export const AdminGallery = () => {

	let [imageArr,setImageArr] = useState<any>()

	const { category } = useParams()

	useEffect(()=>{
		fetch(`http://localhost:8080/gallery/all/${category}`)
			.then(async (res:any)=>{
				let res_json = await res.json()
				setImageArr(res_json)
			})
	},[])

	return (
		<>
			<Container>

				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">{category} Items</Title>
						<Text size="sm" color="darkgray">Edit & Add {category} Items</Text>
					</div>
					<Button mt="md" onClick={()=>window.location.href = window.location +"/add"}>Add Image</Button>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
 					label={`${imageArr?.length} results`} 
 					labelPosition="center" 
 				/>


				<Center my="xl" style={{display:"flex",flexWrap:"wrap"}}>
					{imageArr?.map((e:any) => <Image caption={e.title} key={e.id} onClick={()=>window.location.href = (`${window.location.origin}/gallery/${e.categoryType}/${e.id}`)} p="xs" width={300} height={180} src={e.image} withPlaceholder/>)}
							
				</Center>


 				<Center mb="xl">
 					
 					{imageArr?.length > 0 && <Pagination total={Math.ceil(imageArr?.length/10)} radius="md" />}
 					
				</Center>

			</Container>
		</>
	)
}
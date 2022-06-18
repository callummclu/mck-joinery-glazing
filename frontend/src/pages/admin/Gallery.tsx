import React, {useState, useEffect} from 'react'

import {Container, Divider, Center, Pagination, Grid, Image, Button, Text, Title} from '@mantine/core'
import {GalleryItem} from '../../types/Client/GalleryTypes'
export const AdminGallery = () => {

	let [imageArr,setImageArr] = useState<any>()

	useEffect(()=>{
		fetch('http://localhost:8080/gallery')
			.then(async (res:any)=>{
				let res_json = await res.json()
				setImageArr(res_json.items)
			})
	},[])

	return (
		<>
			<Container>

				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Gallery Items</Title>
						<Text size="sm" color="darkgray">Edit & Add Gallery Items</Text>
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
					{imageArr?.map((e:any) => <Image key={e.id} onClick={()=>window.location.href=`${window.location}/${e.id}`} p="xs" width={300} height={180} src={e.image} withPlaceholder/>)}
							
				</Center>


 				<Center mb="xl">
 					<Pagination total={Math.ceil(imageArr?.length/10)} radius="md" />
				</Center>

			</Container>
		</>
	)
}
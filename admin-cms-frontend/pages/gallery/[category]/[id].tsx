import { Button, Container, Select, Textarea, TextInput,Image, Divider, Title, Text } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, {useEffect, useRef, useState} from 'react'
import useSWR from "swr"
import { convertToBase64 } from "../../../helpers/base64"
import { fetcher } from "../../../helpers/fetchhelper"
import styled from 'styled-components'
import { Nav } from "../../../components/navbar"

export const EditSingleGallery: NextPage = (props:any) => {

    const router = useRouter()
    const {category, id} = router.query


	const titleRef = useRef<HTMLInputElement>() as React.Ref<HTMLInputElement>
	const descriptionRef = useRef<HTMLTextAreaElement>() as React.Ref<HTMLTextAreaElement>
	const galleryItemAreaRef = useRef<HTMLInputElement>() as React.Ref<HTMLInputElement>


	const [galleryItemArea, setGalleryItemArea] = useState<any>()
	const [ImageData, setImageData] = useState<String[]>([])

	const saveItem = async ()=>{

		let title:string = (titleRef! as any).current.value
		let description:string = (descriptionRef! as any).current.value

		fetch(`https://mck-joinery-glazing-backend.herokuapp.com/gallery/${category}/${id}`,{
			method:"POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				"title": title as string,
				"image": ImageData || '',
				"description": description as string,
				"categoryType": category as string
			})
		})
			.then(async (res:any)=>{
				let res_json = await res.json()
				console.log(res_json)
			})
	}

    const {data,error} = useSWR(`https://mck-joinery-glazing-backend.herokuapp.com/gallery/${category}/${id}`,fetcher)


	const deleteItem = () => {
		fetch(`https://mck-joinery-glazing-backend.herokuapp.com/gallery/${category}/${id}`,{
			method:"DELETE"
		})
		.then(async (res:any)=>{
			window.location.replace(`${window.location.origin}/gallery/${category}`)
		})
	}

	return (
		<>
        <Nav>
			<Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">{data?.title}</Title>
						<Text size="sm" color="darkgray">{id}</Text>
					</div>
					<Button onClick={deleteItem} mt="md" color={"red"}>Delete</Button>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<div style={{display:"flex", gap:"20px", justifyContent: "center"}}>
				<StyledImage style={{display:"flex",flexWrap:"wrap"}}>
 					<Image 
 						radius="md"
 						p="xs" 
 						width={350} 
 						height={280} 
 						src={ImageData ? ImageData.toString() : data?.image.join(";")} 
 					/>
 					<input 
 						type="file"
 						style={{
 							width:"350px",
 							height:"280px",
 							position: "absolute",
 							opacity: 0
 						}}
 						onChange={(e:any)=>{
 							convertToBase64(e.target.files[0],setImageData)
 						}}
 					/>

				</StyledImage>

				{galleryItemArea == "beforeAfter" && <StyledImage style={{display:"flex",flexWrap:"wrap"}}>

 					<Image 
 						radius="md"
 						p="xs" 
 						width={350} 
 						height={280} 
 						src={ImageData[0] ? ImageData[0].toString() : data?.image[0]} 
 					/>
 					<input 
 						type="file"
 						style={{
 							width:"350px",
 							height:"280px",
 							position: "absolute",
 							opacity: 0
 						}}
 						onChange={(e:any)=>{
 							convertToBase64(e.target.files[0],setImageData)
 						}}
 					/>

				</StyledImage>}
				</div>


				<TextInput ref={titleRef} label="Title" defaultValue={data?.title} />
				<Textarea ref={descriptionRef} label="Description" defaultValue={data?.description}/>
				<Select
					required
					onChange={setGalleryItemArea}
					label="Pick a Parent Post Type"
					placeholder={data?.galleryItemAreaRef}
					data={[
						{ value: 'normalImage', label: 'Normal Image' },
						{ value: 'beforeAfter', label: 'Before / After Image' }
					]}
			    />
				<Button onClick={saveItem} my="md" mr="md">Save Changes</Button>
				<Button onClick={()=>window.location.replace(window.location.origin + 'categories/gallery')} my="md" variant="outline">Cancel Changes</Button>
			</Container>
            </Nav>
		</>
	)
}

const StyledImage = styled.div`
	transition-duration: 0.2s;
	display: flex;
	align-items: center;
	justify-content:center;
	overflow:hidden;

	&>*{
		background-image:url('https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg');
		background-size: cover;
		background-position:center;
		&:hover{
			cursor:pointer;
			
		}
	}
`

export default EditSingleGallery
import {Container, Title, Text, Divider, Image,Center, TextInput, Textarea, Button} from '@mantine/core'
import {useParams} from 'react-router-dom'
import React, {useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import {convertToBase64, convertFromBase64} from '../../helpers/base64'

export const EditSingleGallery = (props:any) => {

	const { category, id } = useParams()

	const titleRef = useRef<HTMLInputElement>() as React.Ref<HTMLInputElement>
	const descriptionRef = useRef<HTMLTextAreaElement>() as React.Ref<HTMLTextAreaElement>

	const [itemData, setItemData] = useState<any>()
	const [ImageData, setImageData] = useState<any>()

	const saveItem = async ()=>{

		let title:string = (titleRef! as any).current.value
		let description:string = (descriptionRef! as any).current.value

		fetch(`http://localhost:8080/gallery/${category}/${id}`,{
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
				setItemData(res_json)
				console.log(res_json)
			})
	}


	useEffect(()=>{
		fetch(`http://localhost:8080/gallery/${category}/${id}`)
			.then(async (res:any)=>{
				let res_json = await res.json()
				setItemData(res_json)
			})
	},[])

	const deleteItem = () => {
		fetch(`http://localhost:8080/gallery/${category}/${id}`,{
			method:"DELETE"
		})
		.then(async (res:any)=>{
			window.location.replace(`${window.location.origin}/gallery/${category}`)
		})
	}

	return (
		<>
			<Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">{itemData?.title}</Title>
						<Text size="sm" color="darkgray">{id}</Text>
					</div>
					<Button onClick={deleteItem} mt="md" color={"red"}>Delete</Button>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<StyledImage style={{display:"flex",flexWrap:"wrap"}}>

 					<Image 
 						radius="md"
 						p="xs" 
 						width={350} 
 						height={280} 
 						src={ImageData} 
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


				<TextInput ref={titleRef} label="Title" defaultValue={itemData?.title} />
				<Textarea ref={descriptionRef} label="Description" defaultValue={itemData?.description}/>
				<Button onClick={saveItem} my="md" mr="md">Save Changes</Button>
				<Button onClick={()=>window.location.replace(window.location.origin + 'categories/gallery')} my="md" variant="outline">Cancel Changes</Button>
			</Container>
		</>
	)
}

export const AddSingleGallery = () => {

	const { category } = useParams()

	const titleRef = useRef<HTMLInputElement>() as React.Ref<HTMLInputElement>
	const descriptionRef = useRef<HTMLTextAreaElement>() as React.Ref<HTMLTextAreaElement>

	const [ImageData, setImageData] = useState<any>()

	const SaveItem = ()=>{
		let title:any = titleRef
		let description:any = descriptionRef

		fetch(`http://localhost:8080/gallery/${category}/add`,{
			method:"POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				title: title!.current.value,
				image: ImageData || '',
				description: description!.current.value,
				categoryType: category
			})
		})
			.then(async (res:any)=>{
				window.location.replace(`${window.location.origin}/gallery/${category}`)
			})
	}

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
				<StyledImage style={{display:"flex",flexWrap:"wrap"}}>
 					<Image radius="md" p="xs" width={350} height={280} src={ImageData}/>
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
 						accept=".png,.jpg,.jpeg"
 					/>
				</StyledImage>

				<TextInput ref={titleRef} label="Title"/>
				<Textarea ref={descriptionRef} label="Description"/>
				<Button onClick={SaveItem} my="md" mr="md">Add Item</Button>
			</Container>
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
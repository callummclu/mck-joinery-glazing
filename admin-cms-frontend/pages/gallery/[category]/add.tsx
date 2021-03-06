import { Button, Container, Select, Textarea, TextInput,Image, Divider, Title, Text } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, {useEffect, useRef, useState} from 'react'
import useSWR from "swr"
import { convertToBase64 } from "../../../helpers/base64"
import { fetcher } from "../../../helpers/fetchhelper"
import styled from 'styled-components'
import { Nav } from "../../../components/navbar"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export const AddSingleGallery: NextPage = (props:any) => {

    const router:any = useRouter()
    const {category, id}:any = router.query

	const titleRef = useRef<HTMLInputElement>() as React.Ref<HTMLInputElement>
	const descriptionRef = useRef<HTMLTextAreaElement>() as React.Ref<HTMLTextAreaElement>
	const parentCategoryRef = useRef<any>()

	const [ImageData, setImageData] = useState<string[]>()

	const SaveItem = ()=>{
		let title:any = titleRef
		let description:any = descriptionRef
		let parent:any = parentCategoryRef

		fetch(`https://mck-joinery-glazing-backend.herokuapp.com/gallery/${category}/add`,{
			method:"POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				title: title!.current.value,
				image: ImageData || '',
				description: description!.current.value,
				categoryType: category,
				parent: parent.current.value
			})
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
						<Title mt="md">Add an Image</Title>
						<Text size="sm" color="darkgray"></Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
				<StyledImage style={{display:"flex",flexWrap:"wrap"}}>
 					<Image radius="md" p="xs" width={350} height={280} src={(ImageData || "").toString()}/>
 					<input 
						alt="image"
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
				<Select
			 		ref={parentCategoryRef}
					label="Pick a Parent Category"
					placeholder=""
					data={[
						{ value: 'glazing', label: 'Glazing' },
						{ value: 'joninery', label: 'Joinery' }
					]}
					required
			    />
				<Button onClick={SaveItem} my="md" mr="md">Add Item</Button>
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

export default withPageAuthRequired(AddSingleGallery)
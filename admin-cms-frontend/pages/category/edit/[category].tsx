import type { NextPage } from 'next'
import { Text, Container,Button,Title,Divider, Center, Pagination, Image, TextInput, Select } from '@mantine/core';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { fetcher } from '../../../helpers/fetchhelper';
import { Nav } from '../../../components/navbar';


export const EditCategory: NextPage = () => {

    const typeRef = useRef<any>()
	const commentaryRef = useRef<any>()
	const parentCategoryRef = useRef<any>()

    const router:any = useRouter()
    const {id}:any = router.query

    const {data,error} = useSWR(`https://mck-joinery-glazing-backend.herokuapp.com/category/${id}`,fetcher)

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
				parent:parent!.current.value ?? data?.parent
			})
			
		})
	}

    return(
        <Nav>
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
				<TextInput defaultValue={data?.type} ref={typeRef} label="Title" />
				<TextInput defaultValue={data?.commentary} ref={commentaryRef} label="Commentary" />
				<Select
					required
			 		ref={parentCategoryRef}
					label="Pick a Parent Category"
					placeholder={data?.parent}
					data={[
						{ value: 'Glazing', label: 'Glazing' },
						{ value: 'Joninery', label: 'Joinery' }
					]}
			    />
				<Button type="submit" my="md" mr="md">Save Changes</Button>
				<Button onClick={()=>window.location.href = window.location.origin + '/gallery'} my="md" variant="outline">Cancel Changes</Button>
				</form>
			</Container>
        </Nav>
    )
}

export default EditCategory
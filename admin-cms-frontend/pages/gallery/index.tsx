import React, {useState, useEffect} from 'react'
import { Button, Container, Title, Text, Divider,Stack,Group } from '@mantine/core'
import { NextPage } from 'next'
import useSWR from 'swr'
import { fetcher } from '../../helpers/fetchhelper'
import { Nav } from '../../components/navbar'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const GalleryCategories: NextPage = () => {
    const [categories,setCategories] = useState<any[]>()
    let {data,error}:any =  useSWR("https://mck-joinery-glazing-backend.herokuapp.com/category",fetcher)
	const removeCategory = (id:string) => {

		fetch(`https://mck-joinery-glazing-backend.herokuapp.com/gallery/category/${id}`,{
			method:"DELETE"
		})

	 	fetch(`https://mck-joinery-glazing-backend.herokuapp.com/category/${id}`,{
			method:"DELETE"
		}).then(async (res:any)=> {
			let res_json = await res.json()
			data = res_json
            setCategories(data!)
		})
	}

    useEffect(()=>{
        setCategories(data!)
    },[data])

	return (
		<>
        <Nav>
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
			{categories?.map((e:any)=><Group key={e}><Button style={{flexGrow:1}} variant="outline" onClick={()=>window.location.href = (window.location+'/'+e.type)}>{e.type}</Button><Button onClick={()=>window.location.href = (window.location.origin+'/category/edit/'+e.id)} color="gray">Edit</Button><Button onClick={()=>removeCategory(e.id)} color="red">Delete</Button></Group>)}
			</Stack>
			</Container>
        </Nav>

		</>
	)
}

export default withPageAuthRequired(GalleryCategories)
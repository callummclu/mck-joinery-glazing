import type { NextPage } from 'next'
import { Text, Container,Button,Title,Divider, Center, Pagination, Image } from '@mantine/core';
import { BsImage } from 'react-icons/bs'
import useSWR from 'swr';
import { fetcher } from '../../../helpers/fetchhelper';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Nav } from '../../../components/navbar';

export const GalleryCategories: NextPage = () => {

	const [currPage, setCurrPage] = useState<number>(1)

	const router:any = useRouter()
    const {category}:any = router.query

    const {data,error}:any = useSWR(`https://mck-joinery-glazing-backend.herokuapp.com/gallery/all/${category}`,fetcher)

    return(
        <Nav>
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
                label={`${data?.length} results`} 
                labelPosition="center" 
            />


            <Center my="xl" style={{display:"flex",flexWrap:"wrap"}}>
                {data?.slice((currPage - 1) * 10, currPage*10 || data.length)?.map((e:any) => <Image alt="image" radius="md" caption={e.title} key={e.id} onMouseEnter={()=>console.log(e)} onClick={()=>window.location.href = (`${window.location.origin}/gallery/${e.categoryType}/${e.id}`)} p="xs" width={300} height={180} src={e.image}/>)}
                        
            </Center>


            <Center mb="xl">
                
                {data?.length > 0 && <Pagination page={currPage} onChange={setCurrPage} total={Math.ceil(data?.length/10)} radius="md" />}
                
            </Center>

            </Container>
        </Nav>
    )
}

export default GalleryCategories
import React, {useEffect, useState} from 'react'
import {GalleryResponse, GalleryItem} from '../../types/Client/GalleryTypes'

export const Gallery = () => {
	const [data,setData] = useState<any>()

	useEffect(()=>{
		fetch('http://localhost:8080/gallery')
			.then(async (res:any)=>{
				let res_json = await res.json()
				setData(res_json)
			})
	},[])

	const postItem = () => {
		fetch('http://localhost:8080/gallery/add',{
			method:"POST",
			body:JSON.stringify({
				title:"new",
				image:"url",
				description:"desc"
			})
		}).then(async (res:any)=>{
			let res_json = await res.json()
			console.log(res_json)
		})
	}

	return(
		<><button onClick={postItem}>add</button><br/>{data?.status === '200' ? data?.items.map((e:any)=><p>{e.title}<br/>{e.image}<br/>{e.description}<hr/></p>) : <><h1>{data?.status}</h1><p>Error Loading Content...</p></>}</>
	)
}
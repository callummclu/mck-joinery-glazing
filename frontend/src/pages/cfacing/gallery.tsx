import React, {useEffect, useState} from 'react'
import {GalleryResponse, GalleryItem} from '../../types/Client/GalleryTypes'
import {useParams} from 'react-router-dom'
import { TailSpin } from 'react-loading-icons'


export const Gallery = () => {
	const [data,setData] = useState<any>()
	const [categoryData,setCategoryData] = useState<any>()
	const { category } = useParams<string>()

	useEffect(()=>{
		fetch(`http://localhost:8080/gallery/all/${category}`)
			.then(async (res:any)=>{
				let res_json = await res.json()
				setData(res_json)
			})
		fetch(`http://localhost:8080/category/type/${category}`)
			.then(async (res:any)=>{
				let res_json = await res.json()
				console.log(res_json)
				setCategoryData(res_json[0])
			})
	},[])

	return(
		<>
			<h1>{categoryData?.type}</h1>
			<p>{categoryData?.commentary}</p>
			<hr/>
			{data ? data?.map((e:any)=><p>{e.title}<br/>{e.image}<br/>{e.description}</p>) : <><div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"calc(100vh - 150px)"}}><TailSpin fill="#06bcee" stroke="#06bcee" height="6em" width="" strokeWidth="2"/></div></>}
		</>
	)
}
import React, {useState, useEffect} from 'react'
import {HiOutlineMenuAlt4, HiOutlineX} from 'react-icons/hi'

import '../../../styles/cfacing/nav.css'


export const Menubar = () => {

	const [data,setData] = useState<any>()


	const [joineryToggle,setJoineryToggle] = useState<any>(false)
	const [glazingToggle,setGlazingToggle] = useState<any>(false)

	useEffect(()=>{
		fetch(`http://localhost:8080/category`)
			.then(async (res:any)=>{
				let res_json = await res.json()
				setData(res_json)
			})
	},[])

	const [toggleMenubar, setToggleMenubar] = useState(false)

	return(
    	<>
    		<div className="menu-bar">
    			<button onClick={()=>setToggleMenubar(!toggleMenubar)}>{!toggleMenubar ? <HiOutlineMenuAlt4 color="white"/> : <HiOutlineX color="white"/>}</button>
    			<div className={toggleMenubar ? "active" : ""}>
    				<div style={{flexDirection:"column"}} onMouseOver={()=>setJoineryToggle(true)} onMouseLeave={()=>setJoineryToggle(false)}>
	    				<p style={{margin:"25px"}}><a href={window.location.origin + `/gallery/Joinery`}>Joinery</a></p>
	    				{joineryToggle && (
	    					<>
	    						<div style={{position:"absolute", background:"#11192f", marginTop:"140px",width:"auto"}}>
	    							{data?.filter((e:any)=>e.parent == "Joinery").map((e:any) => <p style={{margin:"25px"}}><a href={window.location.origin + `/gallery/${e.type}`}>{e.type}</a></p>)}
	    						</div>
	    					</>)
	    				}
    				</div>
    				<div style={{flexDirection:"column"}} onMouseOver={()=>setGlazingToggle(true)} onMouseLeave={()=>setGlazingToggle(false)}>
    					<p style={{margin:"25px"}}><a href={window.location.origin + `/gallery/Glazing`}>Glazing</a></p>
    					{glazingToggle && (
    						<>
    							<div style={{position:"absolute", background:"#11192f", marginTop:"200px",width:"auto",flexDirection:"column"}}>
    								{data?.filter((e:any)=>e.parent == "Glazing").map((e:any) => <p style={{margin:"25px"}}><a href={window.location.origin + `/gallery/${e.type}`}>{e.type}</a></p>)}
    							</div>
    						</>)
    					}
    				</div>
    			</div>
			</div>
    	</>
	)
}
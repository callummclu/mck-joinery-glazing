import { errorPageProps } from '../types/error/errorTypes'

export const Error = ({code}:errorPageProps) => {
	return(
		<>
			<div style={{height:"calc(100vh - 150px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
			<h1 style={{margin:"0"}}>{code}</h1> 
			<p>Error {code == 404 ? "page does not exist" : ""}</p>
			</div>
		</>
	)
}
import { AppShell, Navbar, Header, Title, Text, Group, MediaQuery, Burger,Button } from '@mantine/core';
import React, {useState} from 'react'
// import '../styles/adminNav.css'
import { BsImage } from 'react-icons/bs'

// const Logout = () => {
//   const { logout } = useAuth0();

//   return <p style={{cursor:"pointer"}} onClick={()=>logout()}>logout</p>
// }

//<Logout/>

export const Nav = ({children}:any) => {

  const [opened, setOpened] = useState(false);

	return (
	
			<AppShell
				padding="md"
				styles={{
					main:{
						background:"rgba(215, 228, 247,0.15)",
						minHeight:"calc(100vh - 75px)"
					}
				}}
		
				header={
					<Header height={65} p="xs">
					<Group>
						<Title style={{cursor:"pointer"}} onClick={()=>window.location.href = window.location.origin}>MCKAP</Title>
						<Text>MCK Admin Portal</Text>
					</Group>
					</Header>
				}
			>
				{children}
			</AppShell>
	)
}

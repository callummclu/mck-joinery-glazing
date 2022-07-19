import { AppShell, Navbar, Header, Title, Text, Group, MediaQuery, Burger,Button, Avatar } from '@mantine/core';
import React, {useState} from 'react'
import { BsImage } from 'react-icons/bs'
import { useUser } from '@auth0/nextjs-auth0'

export const Nav = ({children}:any) => {

  const [opened, setOpened] = useState(false);
  const { user, error, isLoading } = useUser()

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
							<Avatar src={user?.picture} alt="user"/>
						</Group>
					</Header>
				}
			>
				{children}
			</AppShell>
	)
}

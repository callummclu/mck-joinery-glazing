import { AppShell, Navbar, Header, Title, Text, Group, MediaQuery, Burger,Button, Avatar, Menu, Divider } from '@mantine/core';
import React, {useState} from 'react'
import { FiSettings } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router';

export const Nav = ({children}:any) => {

  const [opened, setOpened] = useState(false);
  const { user, error, isLoading } = useUser()
  const router = useRouter()

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
						<Group style={{position:"relative"}}>
							<Title style={{cursor:"pointer"}} onClick={()=>window.location.href = window.location.origin}>MCKAP</Title>
							<Text>MCK Admin Portal</Text>
							<Menu control={<Avatar style={{position:"absolute",right:"10px"}} src={user?.picture} alt="user"/>}>
								<Menu.Label>Application</Menu.Label>
								<Menu.Item icon={<FiSettings size={14} />}>Settings</Menu.Item>
								<Divider />
								<Menu.Item onClick={()=>router.push("/api/auth/logout")} color="red" icon={<BiLogOut size={14} />}>Logout</Menu.Item>

							</Menu>
						</Group>
					</Header>
				}
			>
				{children}
			</AppShell>
	)
}

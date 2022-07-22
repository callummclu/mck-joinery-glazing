import type { NextPage } from 'next'
import { Timeline, Text, Container,Button,Title,Divider, TextInput, Textarea, MultiSelect } from '@mantine/core';
import { BsImage } from 'react-icons/bs'
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5'
import { Nav } from '../components/navbar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRef, useState } from 'react';

export async function getServerSideProps() {
    const homeRes = await fetch(`https://mck-joinery-glazing-backend.herokuapp.com/homepage`)
    const homePageResult = await homeRes.json()
    const homePage = homePageResult[0]

    const categoryRes =  await fetch("https://mck-joinery-glazing-backend.herokuapp.com/category")
    const category = await categoryRes.json()

    return { props: {  homePage,category }}
}


export const Homepage: NextPage = ({ homePage,category }:any) => {

    const mappableCategories = category.map((e:any)=>{return {label:e.type,value:e.type}})

    let splashTextRef = useRef<HTMLTextAreaElement>(null)
    let aboutUsTextRef = useRef<HTMLTextAreaElement>(null)
    let contactUsTextRef = useRef<HTMLTextAreaElement>(null)
    
    let cardTitle1 = useRef<HTMLInputElement>(null)
    let cardText1 = useRef<HTMLTextAreaElement>(null)

    let cardTitle2 = useRef<HTMLInputElement>(null)
    let cardText2 = useRef<HTMLTextAreaElement>(null)

    let cardTitle3 = useRef<HTMLInputElement>(null)
    let cardText3 = useRef<HTMLTextAreaElement>(null)

    let showcaseImage1 = useRef<HTMLInputElement>(null)
    let showcaseImage2 = useRef<HTMLInputElement>(null)
    let showcaseImage3 = useRef<HTMLInputElement>(null)

    let [shownCategory,setShownCategory] = useState<any>()
    console.log(shownCategory)

    const SaveItem = ()=>{
		let splashText = splashTextRef
        let aboutUsText = aboutUsTextRef
        let contactUsText = contactUsTextRef

        let cT1 = cardTitle1
        let ct1 = cardText1

        let cT2 = cardTitle2
        let ct2 = cardText2

        let cT3 = cardTitle3
        let ct3 = cardText3

        let s1 = showcaseImage1
        let s2 = showcaseImage2
        let s3 = showcaseImage3


		fetch(`https://mck-joinery-glazing-backend.herokuapp.com/homepage/${homePage.id}`,{
			method:"POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				splashText: splashText!.current!.value,
				aboutUsText: aboutUsText!.current!.value,
				contactUsText: contactUsText!.current!.value,

				cardTexts: [ct1!.current!.value,ct2!.current!.value,ct3!.current!.value],
                cardTitles: [cT1!.current!.value,cT2!.current!.value,cT3!.current!.value],
				showcaseImages: [s1!.current!.value,s2!.current!.value,s3!.current!.value],
                shownCategory:shownCategory
			})
		})
			.then(async (res:any)=>{
				window.location.replace(`${window.location.origin}`)
			})
	}
	return (
	<>
  <Nav>
    <Container>
				<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div>
						<Title mt="md">Welcome to Homepage</Title>
						<Text size="sm" color="darkgray">Edit Below</Text>
					</div>
				</div>
				<Divider 
					my="xs" 
					variant="dashed"
				/>
                <h2>Title subtexts</h2>
				<Textarea ref={splashTextRef} label="Under Title Text" defaultValue={homePage.splashText}/>
                <Textarea ref={aboutUsTextRef} label="About Us Text" defaultValue={homePage.aboutUsText}/>
                <Textarea ref={contactUsTextRef} label="Contact Us Text" defaultValue={homePage.contactUsText}/>
                <h2>Cards</h2>
                <h4>Card 1</h4>
                <TextInput ref={cardTitle1} label="Title" defaultValue={homePage.cardTitles[0]}/>
                <Textarea ref={cardText1} label="Text" defaultValue={homePage.cardTexts[0]}/>
                <h4>Card 2</h4>
                <TextInput ref={cardTitle2} label="Title" defaultValue={homePage.cardTitles[1]}/>
                <Textarea ref={cardText2} label="Text" defaultValue={homePage.cardTexts[1]}/>
                <h4>Card 3</h4>
                <TextInput ref={cardTitle3} label="Title" defaultValue={homePage.cardTitles[2]}/>
                <Textarea ref={cardText3} label="Text" defaultValue={homePage.cardTexts[2]}/>
                <h2>Showcase Images</h2>
                <TextInput ref={showcaseImage1} label="Image 1" defaultValue={homePage.showcaseImages[0]}/>
                <TextInput ref={showcaseImage2} label="Image 2" defaultValue={homePage.showcaseImages[1]}/>
                <TextInput ref={showcaseImage3} label="Image 3" defaultValue={homePage.showcaseImages[2]}/>
                <h2>Shown Menubar Categories</h2>
                <MultiSelect onChange={(e:any)=>setShownCategory(e)} label="Shown Categories" defaultValue={homePage.shownCategories || ["1","2"]} maxSelectedValues={2} data={mappableCategories} />
				
				<Button onClick={SaveItem} my="md" mr="md">Save</Button>
    </Container>
    </Nav>
    </>
	)
}

export default withPageAuthRequired(Homepage)

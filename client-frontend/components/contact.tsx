import { useRef } from "react"
import styled from "styled-components"
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import { showNotification } from "@mantine/notifications";
import {MdError} from 'react-icons/md'

export const Contact = () => {
  
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const queryRef = useRef<HTMLTextAreaElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const recaptchaRef = React.createRef<ReCAPTCHA>()

    const contactSubmit = (e:any) => {
        e.preventDefault()
        if(recaptchaRef.current?.getValue()){
            fetch("https://mck-joinery-glazing-backend.herokuapp.com/form/send",
            {
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name:nameRef!.current!.value,
                    email:emailRef!.current!.value,
                    phone:emailRef!.current!.value,
                    message:queryRef!.current!.value
                })
            }
            ).then(async (res:any) => {
                let res_json = await res.json()
                console.log(res_json)
                
            })
            showNotification({
                title: 'Message Received',
                message:"We will get back to you shortly",
                color:"green"
            })
            recaptchaRef.current?.reset();

            (document.getElementById("contactForm") as HTMLFormElement)!.reset()
        } else {
            showNotification({
                title: 'Verification Error',
                message:"Please enter the ReCAPTCHA.",
                color:'red',
                icon:<MdError/>
            })
        }
    }

    const onReCAPTCHAChange = (captchaCode:any) => {
        if(!captchaCode){
            return
        }

        recaptchaRef.current?.reset()
    }

    return(
        <>
            <FormCard>
                <ContactForm onSubmit={contactSubmit} id="contactForm">

                    <label htmlFor='contact-name'>Name</label>
                    <FormInput id='contact-name' type="text" ref={nameRef} required/>

                    <label htmlFor='contact-email'>Email</label>
                    <FormInput id='contact-email' type="email" ref={emailRef} required/>

                    <label htmlFor='contact-email'>Phone</label>
                    <FormInput id='contact-phone' type="phone" ref={phoneRef} required/>

                    <label htmlFor='contact-question'>Question</label>
                    <FormTextarea id='contact-question' ref={queryRef} required data-attr={1}/>
                    <ReCAPTCHA
                        style={{marginLeft:"-20px"}}
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}

                    />
                    <div>
                        <FormButton type="submit">Submit</FormButton>
                    </div>
                </ContactForm>
            </FormCard>
        </>
    )
}

const ContactForm = styled.form`
    width:400px;
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    &>*{
        transition-duration:0.15s;
        width:calc(100% - 40px);
        display:block;
        &:nth-child(odd){
            margin-bottom: 10px;
            margin-top: 5px;
        }
        border-radius:0.25em;
    }
`

const FormInput = styled.input`
    border:0;
    border:transparent;
    background:rgba(60,60,60,0.05);
    padding:0.75em;
    font-family:'varela round','sans-serif';
    &:focus{
        
        background:rgba(60,60,60,0.15);
        outline: none;


    }
`
const FormTextarea = styled.textarea`
    resize:none;
    height: 150px;
    width:calc(100% - 40px);
    border:0;
    font-family:'varela round','sans-serif';
    background:rgba(60,60,60,0.05);
    padding:0.75em;
    &:focus{
        background:rgba(60,60,60,0.15);
        outline: none;
    }
    margin-bottom:10px;
`

const FormButton = styled.button`
    width: 5rem;
    border:0;
    height: 2em;
    background: rgba(60,60,60,0.5);
    color:white;
    font-size:16px;
    margin-left:-10px;
    background:#354B8C;
    border-radius:0.5em;
    cursor:pointer;
    &:hover{
        background: rgba(60,60,60,1);
    }
`

const FormCard = styled.div`
   width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:50px;
`


export default Contact

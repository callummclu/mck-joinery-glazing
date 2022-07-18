import { useRef } from "react"
import styled from "styled-components"

export const Contact = () => {
  
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const queryRef = useRef<HTMLTextAreaElement>(null)

    const contactSubmit = (e:any) => {
        e.preventDefault()
        // console.log(nameRef.current?.value, emailRef.current?.value, queryRef.current?.value)
        alert(`Hey, ${nameRef.current?.value}. Thanks for your message, we'll get back to you on ${emailRef.current?.value}`)

    }
    return(
        <>
            <FormCard>
                <ContactForm onSubmit={contactSubmit}>

                    <label htmlFor='contact-name'>Name</label>
                    <FormInput id='contact-name' type="text" ref={nameRef} required/>

                    <label htmlFor='contact-email'>Email</label>
                    <FormInput id='contact-email' type="email" ref={emailRef} required/>

                    <label htmlFor='contact-question'>Question</label>
                    <FormTextarea id='contact-question' ref={queryRef} required data-attr={1}/>
                    <FormButton type="submit">Submit</FormButton>
                </ContactForm>
            </FormCard>
        </>
    )
}

const ContactForm = styled.form`
    width:400px;
    padding:20px;

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

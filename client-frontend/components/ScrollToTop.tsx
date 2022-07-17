import styled from "styled-components"
import {IoIosArrowDropupCircle} from 'react-icons/io'
import { useEffect, useRef, useState } from "react"

export const ScrollToTop = () => {

    const onScrollPress = () => {
        window.scrollTo(0,0)
    }

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <ScrollToTopButton onClick={onScrollPress} className={scrollPosition > 100 ? 'active' : ''}>
            <IoIosArrowDropupCircle size={40}/>
        </ScrollToTopButton>
    )
}


const ScrollToTopButton = styled.button`
    position:fixed;
    right:0;
    bottom:0;
    margin:20px;
    border:0;
    background:0;
    width:50px;
    height:50px;
    margin-bottom: -50px;
    transition-duration:0.15s;
    opacity:0;
    cursor:pointer;

    @keyframes smoothSlideIn{
        0%{margin-bottom: -50px; opacity:0}
        80%{margin-bottom: 30px; opacity:0.8}
        100%{margin-bottom: 20px; opacity:1}
    }

    &.active{
        animation: smoothSlideIn 0.5s forwards;
    }

`
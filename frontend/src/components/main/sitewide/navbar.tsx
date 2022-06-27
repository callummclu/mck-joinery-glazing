import '../../../styles/cfacing/nav.css'
import Marquee from "react-fast-marquee";


export const Nav = () => {
	return(
    	<>
    		<div className="banner">
    			<div onClick={()=>window.location.href=window.location.origin} style={{backgroundImage:"url('https://i.imgur.com/VuDWlgz.png')",cursor:"pointer"}} className="logo"/>
    			<div onClick={()=>window.location.href=window.location.origin} style={{backgroundImage:"url('https://i.imgur.com/wbKPtm2.png')",cursor:"pointer"}} className="sub-logo"/>

    			<div className="links-container">
    				<p>Contact Us</p>
    			</div>
    		</div>
			<div className="nav-tagline">
			<Marquee loop={0} pauseOnHover={true} gradientWidth={0}>
				<p>Joinery & Glazing Specialists</p>
				<p>Joinery & Glazing Specialists</p>
				<p>Joinery & Glazing Specialists</p>
				<p>Joinery & Glazing Specialists</p>
			</Marquee>
			</div>

    	</>
	)
}
import React from "react";
import {
	List,
	ListLink,
	Navbar
} from "./list";
import {
	AnimatedBtn,
	ScrollHeader,
	media
} from "./styledComponents";

export const Header = (props)=>{
	const [scrollActive,setScrollActive] = React.useState(false);
	const [btnActive,setBtnActive] = React.useState(false);

	const items = [
		{children:"Home",to:"#Home"},
		{children:"About",to:"#About"},
		{children:"Projects",to:"#Projects"},
		{children:"Contact",to:"#Contact"},
	];

	

	React.useEffect(()=>{

		const handleScroll =e=>{
			if (window.scrollY>100 && !scrollActive)
				setScrollActive(true);
			else if (window.scrollY<30 && scrollActive)
				setScrollActive(false);
		}

		window.addEventListener("scroll",handleScroll);

		return()=>{
			window.removeEventListener("scroll",handleScroll);
		}
	},[scrollActive]);

	return(
		<ScrollHeader  
			className="navbar" 
			id="header"
			active={scrollActive}
		> 
		  	<h3 className="navbar-title">Rafael</h3>
		 	<Navbar 
		 		items={items} 
		 		className="nav-container"
		 		active={btnActive}
		 		listClass="navbar-nav"
		 	>
			 	<button 
			    	onClick={()=>{
			    		setScrollActive(true);
			    		setBtnActive(!btnActive);
			    	}} 
			    	className="navbar-toggler"
			    >
			        <AnimatedBtn 
			          	active={btnActive} 
			          	className="navbar-toggler-icon"
			        />
			    </button>
		 	</Navbar>
		</ScrollHeader>
	);
}

import React from "react";
import {List,ListLink,Navbar} from "./list";
import {AnimatedBtn,ScrollHeader} from "./styledComponents";

export const Header = (props)=>{
	const [scrollActive,setScrollActive] = React.useState(false);
	const [btnActive,setBtnActive] = React.useState(false);

	const items = [
		{children:"Home",to:"#Home"},
		{children:"Skills",to:"#Skills"},
		{children:"Projects",to:"#Projects"},
		{children:"Contact",to:"#Contact"},
		{children:"About",to:"#About"}
	];

	const handleScroll =e=>{
		if (window.scrollY>100)
			setScrollActive(active=>true);
		else if (window.scrollY<30)
			setScrollActive(active=>false);
	}

	React.useEffect(()=>{

		window.addEventListener("scroll",handleScroll);

		return()=>{
			window.removeEventListener("scroll",handleScroll);
		}

	},[]);

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

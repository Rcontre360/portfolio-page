import React from "react";
import {List,ListLink} from "./list";
import {AnimatedBtn,DropdownObj,ScrollHeader,media} from "./styledComponents";

export const Header = (props)=>{
	const [scrollActive,setScrollActive] = React.useState(false);
	const items = [
		{children:"Home",to:"#Home"},
		{children:"Skills",to:"#Skills"},
		{children:"Proyects",to:"#Proyects"},
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
		 		Item={ListLink} 
		 		className="nav-container"
		 		onActive={()=>setScrollActive(true)}
		 	/>
		</ScrollHeader>
	);
}

const Navbar = (props)=>{
	const [btnActive,setBtnActive] = React.useState(false);
	const {items,Item,onActive,...rest} = props;

	const activeNavbar = ()=>{
		onActive();
		setBtnActive(!btnActive)
	}

	return(
		<nav {...rest}>
		    <button 
		    	onClick={activeNavbar} 
		    	className="navbar-toggler"
		    >
		        <AnimatedBtn 
		          	active={btnActive} 
		          	className="navbar-toggler-icon"
		        />
		    </button>

		    <DropdownObj 
		    	css={media("medium",`transform:scaleY(1);`,false)}
		    	active={btnActive}
		    	className="navbar-nav"
		    >
		    	<List 
		    		className="navbar-nav"
			    	listItems={items} 
				    Item={Item}
				/>
			</DropdownObj>
		</nav>
	);
}
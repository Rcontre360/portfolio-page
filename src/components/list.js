import React from "react";
import {Link} from "react-router-dom";
import {DropdownObj,media} from "./styledComponents";

export const Navbar = (props)=>{
	const {items,active,listClass,className,...rest} = props;

	return(
		<nav {...rest}>
		    {props.children}
		    <DropdownObj 
		    	css={media("medium",`transform:scaleY(1);`,false)}
		    	active={active}
		    	className={`navbar-nav ${className}`}
		    >
		    	<List 
		    		className={listClass}
			    	listItems={items} 
				    Item={ListLink}
				/>
			</DropdownObj>
		</nav>
	);
}

export const List = (props)=>{
	const {listItems,Item,...rest} = props; 

	return(
		<ul {...rest}>
		{
			listItems.map((item,i)=>
			<ListItem key={i}>
				<Item {...item}>
				{item.children}
				</Item>
			</ListItem>
			)
		}
		</ul>
	);
}

export const ListItem = (props)=>{
	const {children} = props;
	return(
		<li className="nav-item">
		{children}
		</li>
	);
}

export const ListLink = (props)=>{
	const {children,router} = props;
	return(
		<React.Fragment>
		{
			router?
			<Link to={props.to} className="nav-link">
				{children}
			</Link>
			:
			<a href={props.to} className="nav-link">
				{children}
			</a>
		}
		</React.Fragment>
	);
}
import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {
	DropdownObj,
	ListStyled,
	media,
	customStyled,
	flexStyle
} from "./styledComponents";

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
		<ListStyled {...rest}>
		{
			listItems.map((item,i)=>
			<ListItem key={i}>
				<Item {...item}>
				{item.children}
				</Item>
			</ListItem>
			)
		}
		</ListStyled>
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
	const {children,router,to,...rest} = props;
	
	return(
		<React.Fragment>
		{
			router?
			<Link to={to?to:"#"} className="nav-link" {...rest}>
				{children}
			</Link>
			:
			<a href={props.to} className="nav-link" {...rest}>
				{children}
			</a>
		}
		</React.Fragment>
	);
}
import React from "react";
import {Link} from "react-router-dom";

export const List = (props)=>{
	const {listItems,Item} = props; 

	return(
		<ul className="navbar-nav">
		{
			listItems.map((item,i)=>
				<Item {...item}>
				{item.children}
				</Item>
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
	const {children} = props;
	return(
		<ListItem>
			<Link to={props.to} className="nav-link">
				{children}
			</Link>
		</ListItem>
	);
}
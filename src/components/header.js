import React from "react";
import {List,ListLink} from "./list";

export const Header = (props)=>{
	const items = [
	{children:"Home",to:"#Home"},
	{children:"Skills",to:"#Skills"},
	{children:"Proyects",to:"#Proyects"},
	{children:"Contact",to:"#Contact"},
	{children:"About",to:"#About"}
	];

	return(
		<header className="navbar" id="header"> 
		  	<h1 className="navbar-title">Rafael Contreras</h1>
		 	<Navbar items={items} Item={ListLink}/>
		</header>
	);
}

const Navbar = (props)=>{
	const {items,Item} = props;

	return(
		<nav className="nav-container" id="nav-bar">
		      <button className="navbar-toggler">
		          <i className="navbar-toggler-icon"></i>
		      </button>
		      <List listItems={items} Item={Item}/>
		</nav>
	);
}
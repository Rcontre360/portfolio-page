import React from "react";

import {customStyled,flexStyle,colors} from "./styledComponents";
import {List} from "./list";
import {IconElement} from "./units";
import {initParticles} from "../utils";

const FooterStyled = customStyled("footer",`
	${flexStyle("column")}
	background:${colors["primary"]};
	color:${colors["text"]};
	width:100%;
	height:30vh;
	position:relative;
`);

export const Footer = (props)=>{
	const icons = [
		{i:{className:"fab fa-github"},className:"btn",link:true},
		{i:{className:"fa fa-envelope"},className:"btn",link:true},
		{i:{className:"fab fa-linkedin"},className:"btn",link:true},
		{i:{className:"fab fa-stack-overflow"},className:"btn",link:true}
	];

	return(
		<FooterStyled>
			<p>© 2021 Rafael</p>
			<List 
				listItems={icons} 
				Item={IconElement}
				css={`
					${flexStyle()}
					.nav-item{
						margin:0.5em;
					}
					.btn{
						font-size:150%;
						background:transparent;
						transition: 0.7s;
						&:hover>*{
							transition: 0.7s;
							transform: scale(1.2);
							color:white;
						}
					}
				`}
			/>
		</FooterStyled>
	);
}
import React from "react";
import {List,ListLink} from "./list";
import {GrowingPercentage} from "./units";
import {useWindowResize,setRelativeUrl} from "../utils";
import {
	SkillElement,
	AnimatedElement,
	BorderedStyled,
	MainContainer,
	flexStyle,
	fadeAnimation,
	moveRotateAnimation,
	moveAnimation,
	rotateOutAnimation,
	scaleAnimation,
	media,
	colors
} from "./styledComponents";

export const AboutContent = (props)=>{
	const bigWindow = useWindowResize(600);

	const technologies = [
		{name:"React",skill:90,image:setRelativeUrl("/assets/react.png"),projects:[],id:0},
		{name:"Node",skill:80,image:setRelativeUrl("/assets/node.png"),projects:[],id:1},
		{name:"CSS",skill:90,image:setRelativeUrl("/assets/css.png"),projects:[],id:2},
		{name:"Javascript",skill:80,image:setRelativeUrl("/assets/javascript.png"),projects:[],id:3},
		{name:"MongoDB",skill:70,image:setRelativeUrl("/assets/mongo.png"),projects:[],id:4},
		{name:"Html",skill:70,image:setRelativeUrl("/assets/html.png"),projects:[],id:5},
		{name:"Express",skill:70,image:setRelativeUrl("/assets/express.png"),projects:[],id:6}
	];

	return(
		<MainContainer id="About" 
		css={`
			padding-top:4em;
		`}>
			<AnimatedElement 
				animation={[fadeAnimation]}
			>
			<h1>About</h1>
			</AnimatedElement>
			<AboutMe/>
			<List 
				css={`
					${flexStyle()}
					flex-wrap:wrap;
					${media("huge",`
						width:60%;
						min-width:600px;
					`)}
					${media("normal",`
						width:100%;
						min-width:0px;
					`)}
					${media("medium",`
						${flexStyle("column")}
						li{
							width:80%;
						}
					`)}
				`}
				listItems={technologies} 
				Item={bigWindow?Skill:SkillBarStyle}
			/>
		</MainContainer>
	);
}

const AboutMe = (props)=>{
	return(
		<AnimatedElement
			animation={[rotateOutAnimation]}
		>
			<article>
				<BorderedStyled 
					css={`
						font-size:120%;
						padding:2em;
						margin:0.5em 1em 0 1em;
					`}>
					<p>
					Welcome to my portfolio!

					I´m a Computer Science student living at Caracas, Venezuela. I started programming when I was 17 and since then I´m passionate with it. 
					</p>
					<br/>
					<p>
					When it comes to building applications I focus mostly on its performance, scalability and user experience. I love to set up animations and improve my code´s speed and eficiency. 
					Also I know many things and technologies related to backend, nevertheless I´m more proficent building the frontend.
					</p>
					<br/>
					<p>
					I love to build software and learn new tools, techniques and technologies. One of my favorite ones is React, mostly because of its flexibility.
					Also I love to use Javascript as my principal programming language.
					</p>
				</BorderedStyled>
			</article>
		</AnimatedElement>
	);
}

const Skill = (props)=>{
	const {name,image,skill,id} = props;

	return(
	<AnimatedElement 
		animation={[fadeAnimation,moveRotateAnimation]}
		delay="1s" 
		time={id*200}
	>
		<SkillElement>
			<div className="skill_main">
				<h4 className="skill_name">{name}</h4>
				<img className="skill_image" src={image?image:""}/>
			</div>
		<AnimatedElement
			animation={[fadeAnimation]}
			time={id*300}
			renderOnActive
		>
			<GrowingPercentage className="percentage" limit={skill}/>
		</AnimatedElement>
		</SkillElement>
	</AnimatedElement>
	);
}

const SkillBarStyle = (props)=>{
	const {name,skill,id} = props;
	return(
		<AnimatedElement
			animation={[fadeAnimation]}
			css={`
				width:100%;
				.bar{
					${flexStyle("row","flex-start")}
					width:${skill}%;
					height:1em;
					font-size:120%;
					font-weight:bolder;
					background:${colors["auxiliar"]};
					margin:0.3em;
					padding:1px;
					transform-origin:left;
					animation-fill-mode: forwards;
					animation-timing-function: ease-out;
				}
			`}
		>
			<h4>{name}</h4>
			<AnimatedElement
				animation={[scaleAnimation]}
				renderOnActive
			>
				<div className="bar">
					<GrowingPercentage className="percentage" limit={skill}/>
				</div>
			</AnimatedElement>
		</AnimatedElement>
	);
}
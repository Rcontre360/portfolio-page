import React from "react";
import {List,ListLink} from "./list";
import {GrowingPercentage,ReadMore} from "./units";
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
		{name:"React",skill:90,image:"/assets/react.png",projects:[],id:0},
		{name:"Node",skill:80,image:"/assets/node.png",projects:[],id:1},
		{name:"CSS",skill:85,image:"/assets/css.png",projects:[],id:2},
		{name:"Javascript",skill:90,image:"/assets/javascript.png",projects:[],id:3},
		{name:"MongoDB",skill:70,image:"/assets/mongo.png",projects:[],id:4},
		{name:"Html",skill:90,image:"/assets/html.png",projects:[],id:5},
		{name:"Express",skill:70,image:"/assets/express.png",projects:[],id:6}
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
						${media("tiny",`
							font-size:105%;
						`)}
						font-size:120%;
						padding:2em 2em 0.5em 2em;
						margin:0.5em 1em 0 1em;
					`}>
					<ReadMore>
					<p>
					Welcome to my portfolio!

					I´m a Computer Science student and a Frontend Web developer living at Caracas, Venezuela. I´m a passionate programmer who loves to build applications and, in general, anything with code. 
					</p>
					<p>
					When it comes to building applications I focus mostly on its performance, scalability and user experience. I love to set up animations and improve my code´s speed and eficiency. 
					Also I know many things and technologies related to backend, nevertheless I´m more proficent building the frontend.
					</p>
					<p>
					I love to build software and learn new tools, techniques and technologies. One of my favorite ones is React, mostly because of its flexibility.
					Also I love to use Javascript as my principal programming language.
					</p>
					</ReadMore>
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
				<img className="skill_image" src={setRelativeUrl(image)}/>
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
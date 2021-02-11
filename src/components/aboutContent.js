import React from "react";
import {List,ListLink} from "./list";
import {
	SkillElement,
	AnimatedElement,
	BorderedStyled,
	MainContainer,
	flexStyle,
	fadeAnimation,
	moveRotateAnimation,
	moveAnimation,
	rotateOutAnimation
} from "./styledComponents";

export const AboutContent = (props)=>{

	const technologies = [
		{name:"React",skill:90,image:"/assets/react.png",projects:[],id:0},
		{name:"Node",skill:80,image:"/assets/node.png",projects:[],id:1},
		{name:"CSS",skill:90,image:"/assets/css.png",projects:[],id:2},
		{name:"Javascript",skill:80,image:"/assets/javascript.png",projects:[],id:3},
		{name:"MongoDB",skill:70,image:"/assets/mongo.png",projects:[],id:4},
		{name:"Html",skill:70,image:"/assets/html.png",projects:[],id:5},
		{name:"Express",skill:70,image:"/assets/express.png",projects:[],id:6}
	];

	return(
		<MainContainer id="Skills" 
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
				css={`${flexStyle()}flex-wrap:wrap;`}
				listItems={technologies} 
				Item={Skill}
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
						padding:1em;
						margin:0.5em 1em 0 1em;
					`}>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur.
					</p>
				</BorderedStyled>
			</article>
		</AnimatedElement>
	);
}

const Skill = (props)=>{
	const {name,image,projects,skill,id} = props;

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

export const GrowingPercentage = (props)=>{
	const [percentage,setSkillPercentage] = React.useState(0);
	const {limit,...rest} = props;

	React.useEffect(()=>{
		
		const proximity = (limit-percentage)/100*limit;

		if (percentage<limit)
			setTimeout(setSkillPercentage, 10/(proximity/50), prev=>prev+1*Math.floor(proximity/5+1));

	},[percentage]);

	return(
		<p {...rest}>
			{percentage}%
		</p>
	);
}
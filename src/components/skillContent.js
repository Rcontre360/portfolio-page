import React from "react";
import {List,ListLink} from "./list";
import {BarChart} from "./styledComponents";


export const SkillContent = (props)=>{

	const technologies = [
		{name:"React",skill:10,image:"/assets/react.png",projects:[]},
		{name:"Node",skill:80,image:"/assets/node.png",projects:[]},
		{name:"CSS",skill:90,image:"/assets/css.png",projects:[]},
		{name:"Javascript",skill:80,image:"/assets/javascript.png",projects:[]},
		{name:"MongoDB",skill:70,image:"/assets/mongo.png",projects:[]},
		{name:"Html",skill:70,image:"/assets/html.png",projects:[]},
		{name:"Express",skill:70,image:"/assets/express.png",projects:[]}
	];

	return(
		<div className="skills_container">
			<h3>My technology stack</h3>
			<List 
				className="skill_list" 
				listItems={technologies} 
				Item={Skill}
			/>
		</div>
	);
}

const Skill = (props)=>{
	const {name,image,projects,skill} = props;

	return(
		<div className="skill">
			<div className="skill_main">
				<h4 className="skill_name">{name}</h4>
				<img className="skill_image" src={image?image:""}/>
			</div>
			
			<BarChart 
				percentage={skill} 
				className="skill_chart"
			>
				{skill}%
			</BarChart>
		</div>
	);
}
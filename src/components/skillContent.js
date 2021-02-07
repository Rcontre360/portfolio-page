import React from "react";
import {List} from "./list";



export const SkillContent = (props)=>{
	const technologies = [
		{name:"React",skill:90},
		{name:"Node",skill:80},
		{name:"CSS",skill:90},
		{name:"Javascript",skill:80},
		{name:"MongoDB",skill:70}
	];

	return(
		<div className="skills_container">
			<h3>Main technologies I use</h3>
			<div className="technologies">
			<List className="skill_list" listItems={technologies} Item={Skill}/>
			</div>
		</div>
	);
}

const Skill = (props)=>{
	const {name} = props;
	return(
		<div className="skill">
			<h4 className="skill_name">{name}</h4>
			<div className="test"></div>
		</div>
	);
}
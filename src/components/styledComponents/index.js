import styled from "styled-components";

export const AnimatedBtn = styled.i`
	display: block;
	width:23px;
	height: 0.5px;
	background:black;
	border:none;
	content:"";
	transition:1s;
	position:relative;
	margin-left: 2px;
	border:none;
	&::after{
		display: block;
		width:23px;
		height: 1px;
		background:black;
		content:"";
		position:absolute;
		top:6px;
	}
	&::before{
		display: block;
		width:23px;
		height: 1px;
		background:black;
		content:"";
		position:absolute;
		top:-6px;
	}
${props=>{
	console.log(props)
	if (props.active)
		return`
		transition:1s;
		transform:rotate(720deg);
		background:transparent;
		&::after{
			transition:1s;
			transform: translate( 0px, -6px) rotate(-45deg);
		}
		&::before{
			transition:1s;
			transform:translate( 0px, 6px) rotate(45deg);
		}`
}}
`;
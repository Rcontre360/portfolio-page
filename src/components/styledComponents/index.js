import styled,{css} from "styled-components";

export const sizes = {
	tiny:"300px",
	small:"450px",
	medium:"600px",
	normal:"750px",
	large:"900",
	huge:"1100"
}

export const colors = {
	primary:"#2B2E4A",
	secondary:"#E84545",
	auxiliar:"#903749",
	clear:"#53354A",
	text:"#FF8965"
}

export const media = (size,styles,over=true)=>{
	const query = over?`max-width:${sizes[size]}`:`min-width:${sizes[size]}`
	return `@media (${query}){
		${styles}
	}`;
}

const stylesFunction = props=>{
	return css`
		${props.css}
	`;
}

export const AnimatedBtn = styled.i`
	display: block;
	width:23px;
	height: 2px;
	background:${colors["text"]};
	border:none;
	content:"";
	transition:1s;
	position:relative;
	margin-left: 2px;
	border:none;
	&::after{
		display: block;
		width:23px;
		height: 2px;
		background:${colors["text"]};
		content:"";
		position:absolute;
		top:6px;
	}
	&::before{
		display: block;
		width:23px;
		height: 2px;
		background:${colors["text"]};
		content:"";
		position:absolute;
		top:-6px;
	}
	${props=>{
		if (props.active)
			return`
			transition:0.7s;
			transform:rotate(720deg);
			background:transparent;
			&::after{
				transition:0.7s;
				transform: translate( 0px, -6px) rotate(-45deg);
			}
			&::before{
				transition:1s;
				transform:translate( 0px, 6px) rotate(45deg);
			}`
	}}
 	${stylesFunction}
`;

export const DropdownObj = styled.div`
	transform:scaleY(0);
	transition:0.5s;
	transform-origin:top;
	${props=>{
		if (props.active)
			return`
			transition:0.5s;
			transform-origin:top;
			transform:scaleY(1);
		`; 
	}}
	${stylesFunction}
`;

export const ScrollHeader = styled.div`
	transition:1s;
	${props=>{
		console.log(props.active);
		return props.active?
		`background:${colors["primary"]};`
		:
		`background:transparent;`;
	}}
`;
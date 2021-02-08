import styled,{css} from "styled-components";
import {List} from "../list";

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
	${props=>props.active?
		`background:${colors["primary"]};`
		:
		`background:transparent;`
	}
	${stylesFunction}
`;

export const BarChart = styled.div`
	border:solid ${colors["auxiliar"]} 2px;
	border-radius:5px;
	background:linear-gradient(to left,black,white);
	background-repeat:no-repeat;
	${props=>props.percentage && `background-size:${props.percentage}%;`}
	${stylesFunction}
`;

export const CarouselList = styled.ul.attrs(props=>({
	width:props.width || 200,
	height:props.height || 200,
	currentImage:props.currentImage || 0
}))`
	display:flex;
	${props=>{
		const {width,height} = props;

		let res = `width:${width}px;`;
		res = res+`height:${height}px;`;
		res = res+`img{${res}}`;
		return res;
	}}
	${props=>props.currentImage>=0 
		&& 
	`&>*{
		transform:translateX(${-props.currentImage*props.width}px);
		transition:1s;
	}`}
	${stylesFunction}
`;

export const CarouselStyled = styled.div.attrs(props=>({
	width:props.width || "200px",
	height:props.height || "200px",
	unit:props.unit || "px",
	currentImage:props.currentImage || 0
}))`
	display:flex;
	.carousel_foot_foot{
		text-align:center;
		grid-area:foot;
		grid-column:1/3;
		.carousel_elements{
			display:flex; 
			justify-content:center;
			width:100%;
			color:yellow;
		}
		.btn{
			background:transparent;
			color:${colors["primary"]};
		}
		${props=>`
			#circle-${props.currentImage}{
				color:${colors["text"]};
			}
		`}
	}
	.carousel_foot{
		display:flex;
		position: relative;
		justify-content:center;
		align-items:flex-end;
		padding:1%;
		bottom:0;
		width:98%;
		color:${colors["clear"]};
		font-weight:bolder;
		.left, .right{
			position:absolute;
			padding:0 1em;
			background:transparent;
			margin:1em;
			width:3em;
			height:3em;
			border:none;
			border-radius:100%;
			box-shadow:0 0 5px ${colors["primary"]};
			color:${colors["primary"]};
			top:50%;
			transform:translateY(-50%);
		}
		.left{
			left:0;
		}
		.right{
			right:0;
		}
	}
	${props=>{
		const {width,height,currentImage,unit} = props;
		let res = `
		width:${width};
		height:${height};
		.carousel_list{
			display:flex;
			width:${width};
			height:${height};
			overflow: hidden;
			position:absolute;
			img{
				width:${width};
				height:${height};
			}
			&>*{
				transform:translateX(${-currentImage*parseInt(width)+unit});
				transition:1s;
			}
		}`
		return res;
	}}
	${stylesFunction}
`; 

export const CardStyle = styled.div.attrs(props=>({
	width:props.width || "200px",
	height:props.height || "300px"
}))`
	position:relative;
	background:transparent;
	color:${colors["text"]};
	text-align:center;
	box-shadow:0 0 10px black;
	border-radius:5px;
	transition:1s;
	transform:rotate3d(0, 1, 0, 0deg);;
	overflow:hidden;
	${props=>props.rotate && `
		&:hover{
			transition:1s;
			transform:rotate3d(0, 1, 0, 360deg);;
		}
	`}
	${props=>props.scale && `
		&:hover{
			transition:1s;
			transform:scale(1.03);
		}
	`}
	${props=>props.appear && `
		.card_body{
			display:flex;
			justify-content:center;
			align-items:center;
			top:0;
			right:0;
			width:100%;
			height:${props.height};
			transition:0.7s;
			opacity:0;
			position:absolute;
			background:${colors["primary"]};
			color:${colors["text"]};
		}
		&:hover .card_body{
			transition:0.7s;
			opacity:0.9;
		}
	`}
	${props=>{
		const {width,height,appear} = props;
		return`
			width:${width};
			height:${height};
			.card_image{
				width:100%;
				${appear?`height:auto`:"max-height:65%;"}
			}
		`
	}}
	${stylesFunction}
`;

export const ResultDisplayStyle = styled.div.attrs(props=>({
	width:props.width || "600px",
	height:props.height || "400px"
}))`
	.results_children{
		display:flex;
		justifyContent:center;
		padding:1em;
		& >*{
			width:100%;
		}
	}
	.results_nav{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		box-shadow:0 0 5px ${colors["secondary"]};
		.nav-item{
			padding:1em;
			&:hover, &:hover>*{
				background:${colors["secondary"]};
				color:${colors["primary"]};
			}
		}
	}
	${props=>{
		const {width,height} = props;
		return `
			width:${width};
			height:${height};
		`;
	}}
	${stylesFunction}
`;
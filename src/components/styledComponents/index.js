import React from "react";
import styled,{css,keyframes,createGlobalStyle} from "styled-components";
import {List} from "../list";
import {isElementVisible} from "../../utils";

export const sizes = {
	tiny:"300px",
	small:"450px",
	medium:"600px",
	normal:"750px",
	large:"900px",
	huge:"1100px"
}

export const colors = {
	primary:"#2B2E4A",
	secondary:"#E84545",
	auxiliar:"#903749",
	clear:"#53354A",
	text:"#FF8965"
}

const hover = {
	scale:css`transform:scale(1.2); color:white;`,
	colors:css`transition:0.5s; color:white;`,
	rotate3d:css`transform:rotate3d(0, 1, 0, 360deg);;`,
	appear:css`opacity:1;`
}

const stylesFunction = props=>{
	return css`
		${props.css}
	`;
}

export const customStyled = (element,styles=``)=>{
	return styled[element]`
		${css`${styles}`}
		${stylesFunction}
	`;
}

export const media = (size,styles,over=true)=>{
	const query = over?`max-width:${sizes[size]}`:`min-width:${sizes[size]}`
	return `@media (${query}){
		${styles}
	}`;
}

export const flexStyle = (dir="row",align="center")=>{
	let alignItems = `align-items:${align};`
	if (dir==="row" || dir==="row-reverse")
			alignItems = `align-items: center;`

	return`
	display: flex;
	flex-direction: ${dir};
	justify-content: ${align};
	${alignItems}
	`
}

export const hoverStyles = (type=false,target="",styles="")=>{
	return `
		transition:0.5s;
		&:hover${target}{
			transition:0.5s;
			${type? hover[type]:""}
			${styles}
		}
	`
}

export const fadeAnimation = keyframes`
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
`

export const moveAnimation = keyframes`
	from {
		transform:translateX(100%);
	}
	to {
		transform:translateX(0);
	}
`

export const rotateAnimation = keyframes(`
	from {
		transform: rotate(260deg);
	}
	to {
		transform: rotate(0deg);
	}
`);

export const moveRotateAnimation = keyframes`
	from {
		transform:translateX(100%) rotate(260deg);
	}
	to {
		transform:translateX(0) rotate(0deg);
	}
`

export const rotateOutAnimation = keyframes`
	from {
		backface-visibility:hidden;
		transform: rotate3d(1, 0, 0, 180deg);
	}
	to {
		backface-visibility:hidden;
		transform: rotate3d(1, 0, 0, 0deg);
	}
`;

export const scaleAnimation = keyframes`
	from {
		transform:scaleX(0);
		transform-origin:left;
	}
	to {
		translate:scale(1);
		transform-origin:left;
	}
`;

export const GlobalStyle = createGlobalStyle`
	*{
		padding:0;
		margin: 0;
	}

	body{
		background: ${colors["primary"]};
		color:${colors["text"]};
		font-weight: 200;
		font-family: calibri;
	}

	li{
		list-style: none;
	}

	a,a:visited{
		text-decoration: none;
		color:${colors["text"]};
	}
	&::-webkit-scrollbar{
		width:0.5em;
		height:0.5em;
		background:${colors["primary"]};
		border:solid ${colors["secondary"]} 2px;
		border-radius:10px;
	}
	&::-webkit-scrollbar-button{
		background:${colors["auxiliar"]};
	}
	&::-webkit-scrollbar-thumb{
		background:grey;
		border-radius:10px;
	}
`;

const Animated = styled.div.attrs(props=>({
	animation:props.animation || "",
	delay:props.delay || "2s"
}))`
	${props=>{
		const {animation,delay} = props;
		let final = "";
		animation.forEach((anim,i)=>{
			if (i==0)
				final = css`${anim} ${delay}`;
			else if (i<animation.length)
				final = css`${final},${anim} ${delay}`;
		});
		return props.active?
		css`animation:${final};`
		:
		css`visibility:hidden;`}
	}
	${stylesFunction}
`

export const AnimatedElement = (props)=>{
	const {children,time,initialAppear,renderOnActive} = props;
	const [visible,setVisible] = React.useState(false);
	const reference = React.useRef(null);

	React.useEffect(()=>{

		const elementVisibleEvent = ()=>{
			if (isElementVisible(reference.current,70) && !visible && reference!=null){
				setTimeout(setVisible,time || 0,true);
			}
		}
		window.addEventListener("scroll",elementVisibleEvent);
		
		if (initialAppear)
			setTimeout(setVisible,time || 0,true);

		return()=>{
			window.removeEventListener("scroll",elementVisibleEvent);
		}
	});

	return(
		<Animated 
			active={visible} 
			ref={reference}
			{...props} 
		>	
		{
			renderOnActive?
				(visible && children)
			:
				children
		}
		</Animated>
	);
}

export const MainContainer = styled.section`
	${flexStyle("column")}
	padding:1em;
	color:${colors["text"]};
	width:calc(100% - 2em);
	${props=>props.height && `height:${props.height};`}
	${stylesFunction}
`

export const Container = styled.div.attrs(props=>({
	flex:props.flex || "row",
	align:props.align || "center"
}))`
	${props=>flexStyle(props.flex,props.align)}
	padding:0.5em;
	${stylesFunction}
`

export const Form = styled.form`
	${flexStyle("column","space-between")}
	padding:0.8em;
	${stylesFunction}
`

const BaseInput = props=>{
	const {name,Input,...rest} = props;

	return(
	<React.Fragment>
		<label htmlFor={name} >{name}</label>
		{Input?<Input id={name} {...rest}/>:<input id={name} {...rest}/>}
	</React.Fragment>
	);
}

export const Input = styled(BaseInput)`
	padding:0.2em;
	border-radius:5px;
	color:${colors["text"]};
	background:${colors["primary"]};
	outline:none;
	margin:0.3em;
	${stylesFunction}
`

export const ListStyled = customStyled("ul",`
	display:flex;
	justify-content:center;
	align-items:center;
`);

export const Button = styled.button`
	background:${colors["auxiliar"]};
	color:${colors["text"]};
	border:none;
	border-radius:5px;
	padding:5px;
	outline:none;
	${stylesFunction}
`

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

export const BorderedStyled = props=>{
	return(
		<Border {...props}>
			<span>
				<span>
					<span>
				{props.children}
					</span>
				</span>
			</span>
		</Border>
	);
}

const beforeAfter = (width,height,color=colors["text"])=>{
	return css`
		content: "";
	    position: absolute;
	    height: ${height};
	    width: ${width};
	    background: ${color};
	`
}

const Border = styled.div.attrs(props=>({
	width: props.width || "3px",
	padding: props.padding || "0.5em",
	delay: props.delay || "1s"
}))`
	transition:${props=>props.delay};
	position:relative;
	display: inline-block;
	cursor: pointer;
	background:transparent;
	border:none;
	overflow:hidden;
	padding:${props=>props.padding};
	color:${colors["text"]};

	&:before, &:after {
		${props=>beforeAfter("100%",props.width,colors["text"])}
	 	left:0;
	}

	&:before {
	  top: 0;
	}

 	&:after {
	  bottom: 0;
	}

	& > *{
		&:before, &:after{
			${props=>beforeAfter("100%",props.width,"white")}
			z-index:10;
			left:0;
			transition:${props=>props.delay};
		}
		&:before{
			transform:translateX(100%);
			top:0;
		}
		&:after {
			transform:translateX(-100%);
			bottom:0;
		}
	}

	& > *{
		& > *{
			&:before, &:after{
				${props=>beforeAfter(props.width,"100%",colors["text"])}
				top:0;
			}
			&:before{
				left:0;
			}
			&:after{
				right:0;
			}
			& > *{
				&:before, &:after{
					${props=>beforeAfter(props.width,"100%","white")}
					z-index:10;
					top:0;
					transition:${props=>props.delay};
				}
				&:before{
					transform:translateY(100%);
					left:0;
				}
				&:after{
					transform:translateY(-100%);
					right:0;
				}
			}
		}
	}

	&:hover{
		transition:${props=>props.delay};
		color:white;
		& > *{
			&:before, &:after{
				transition:${props=>props.delay};
				transform:translateX(0);
			}
			& > *{
				& > *{
					&:before, &:after{
						transition:${props=>props.delay};
						transform:translateX(0);
					}
				}
			}
		}
	}
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
	${flexStyle("row","space-between")}
	background:${colors["primary"]};
	color:${colors["text"]};
	position: fixed;
	top:0;
	right:0;
	left:0;
	padding:0 1em 0 0;
	z-index: 100;

	.navbar-title{
		background:linear-gradient(to right,color(text),transparent);
		color:color(primary);
		font-size:150%;
		padding:0.6em;
		font-style: italic;
		height:100%;
		width:80px;
		height: auto;
	}

	.navbar-toggler{
		display:none;
	}

	.nav-item{
		${flexStyle("row","space-around")}
		position:relative;
		&:after{
			content: "";
			position:absolute;
			background:${colors["text"]};
			transform:scaleX(0);
			width:85%;
			height: 3px;
			bottom:0;
			left:0;
			transform-origin: left;
		}
		${hoverStyles("scale","::after",css`transform-origin:left;`)}
		padding:20px 10px;
	}

	${media("medium",`
		.navbar-nav{
			${flexStyle("column")}
			justify-content: flex-start;
			position:absolute;
			background:${colors["primary"]};
			width: 100%;
			height: 100vh;
			top:40px;
			left:0;
		}

		.navbar-toggler{
			outline:none;
			display: block;
			background:transparent;
			border:none;
			width:25px;
			height: 25px;
			padding:20px 10px;
		}
	`)}

	transition:1s;
	${props=>props.active?
		`background:${colors["primary"]};`
		:
		`background:transparent;`
	}
	${stylesFunction}
`;

export const CarouselStyled = styled.div.attrs(props=>({
	width:props.width || "200px",
	height:props.height || "200px",
	unit:props.unit || "px",
	currentImage:props.currentImage || 0
}))`
	display:flex;
	position: relative;
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
			border:solid black 4em;
			color:${colors["primary"]};
		}
		${props=>`
			#circle-${props.currentImage} > *{
				color:${colors["auxiliar"]};
			}
		`}
	}
	.carousel_foot{
		display:flex;
		justify-content:center;
		align-items:flex-end;
		padding:1%;
		bottom:0;
		width:98%;
		color:${colors["text"]};
		font-weight:bolder;
		z-index:100;
		.left, .right{
			position:absolute;
			padding:0 1em;
			background:rgba(144, 55, 73, 0.5);
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
			justify-content:flex-start;
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
			.nav-item{
				margin:0;
				padding:0;
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
	transition:1s;
	transform:rotate3d(0, 1, 0, 0deg);;
	overflow:hidden;
	${props=>props.rotate && hoverStyles("rotate3d")}
	${props=>props.scale && hoverStyles("scale")}
	${props=>props.appear && `
		.card_body{
			${flexStyle()}
			top:0;
			right:0;
			width:100%;
			height:100%;
			transition:0.7s;
			opacity:0;
			position:absolute;
			background:${colors["primary"]};
			color:${colors["text"]};
			&>*{
				${flexStyle()}
				display:block;
				width:70%;
			}
		}
		${hoverStyles(false," .card_body",css`opacity:0.9;`)}
		
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
	${stylesFunction}
	.results_children{
		${flexStyle()}
		padding:1em;
		& >*{
			width:100%;
		}
	}
	.results_nav{
		${flexStyle("row","space-around")}
		flex-wrap:wrap;
		box-shadow:0 0 5px ${colors["secondary"]};
		.nav-item{
			position:relative;
			&::after{
				content: "";
				position:absolute;
				background:${colors["text"]};
				transform:scaleX(0);
				width:85%;
				height: 3px;
				bottom:0;
				left:0;
				transform-origin: left;
			}
			${hoverStyles("scale","::after",css`transform-origin:left;`)}
		}
	}
	${props=>{
		const {width,height} = props;
		return `
			width:${width};
			height:${height};
		`;
	}}
`;

export const SkillElement = styled.div`

	${flexStyle("column","space-between")}
	width:110px;
	height:120px;
	text-align: center;
	margin: 1em;
	.skill_main{
		position:relative;
		width:100%;
		height: 100%;
		overflow:hidden;
		-webkit-clip-path: polygon(0% 30%, 30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%);
		clip-path: polygon(0% 30%, 30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%);

		&::before{
			position:absolute;
			content: "";
			width:100%;
			height: 100%;
			background:${colors["auxiliar"]};
			transition: 0.7s;
			transform:scaleY(0);
			transform-origin: top;
			opacity: 0.9;
		}
		${hoverStyles("appear"," .skill_name")}
		${hoverStyles("scale","::before")}

		.skill_image{
			width:100%;
			height:100%;
		}
		.skill_name{
			position:absolute;
			right:50%;
			top:50%;
			transform: translate(50%,-50%);
			opacity: 0;
		}
	}
	.percentage{
		font-size:120%;
	}
	${stylesFunction}
`;

export const PopupStyles = styled.div`	
	${flexStyle("row","")}
	.popup_blur{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height: 100%;
		z-index: 200;
		background: rgba(0,0,0,0.5);
		filter:blur(20px);
		-webkit-filter:blur(20px);
	}

	.popup_wrapper{
		${flexStyle()}
		max-width:90vw;
		max-height:90vh;
		position:relative;
		position:fixed;
		transform:translate(50%,-50%);
		right:50%;
		top:50%;
		z-index: 300;
	}

	.popup{
		max-width:90vw;
		max-height:90vh;	
		overflow:scroll;
		color:${colors["text"]};
		background:${colors["primary"]};
		width:100%;
		height:100%;
		padding: 1em;
		border:solid ${colors["secondary"]} 5px;
		border-radius: 10px;
	}

	.popup_close{
		width:35px;
		height: 35px;
		position: absolute;
		top:-12.5px;
		right:-1vw;
		font-size:120%;
		background: ${colors["primary"]};
		color:${colors["text"]};
		border:solid ${colors["secondary"]} 3px;
		border-radius: 50%;
		outline:none;
	}
	.popup_close:hover{
		background: ${colors["auxiliar"]};
		color:${colors["primary"]};
	}

	.popup_close:active{
		background: ${colors["primary"]};
		color:${colors["auxiliar"]};
	}
	${stylesFunction}
`;
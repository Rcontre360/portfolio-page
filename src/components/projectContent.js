import React from "react";
import {css} from "styled-components";
import {List,Navbar} from "./list";
import {CarouselList,CarouselStyled,CardStyle,ResultDisplayStyle} from "./styledComponents";

export const ProjectContent = (props)=>{

	const items = [
		{children:"React",to:"/react",router:true},
		{children:"Javascript",to:"/javascript",router:true},
		{children:"Node",to:"/node",router:true},
		{children:"Express",to:"/express",router:true},
		{children:"Mongo",to:"/mongo",router:true},
		{children:"Plain webpage",to:"/webpage",router:true}
	];

	const Projects = [
		{
			name:"Chat Application",
			images:[
				"/assets/react.png",
				"/assets/node.png",
				"/assets/css.png",
				"/assets/javascript.png"
			],
			description:"A chat app built with react ad socket.io"
		},
		{
			name:"Calculator",
			images:[
				"/assets/react.png",
				"/assets/node.png",
				"/assets/css.png",
				"/assets/javascript.png"
			],
			description:"A chat app built with react ad socket.io"
		}
	]

	const images = [
		{text:"React",src:"/assets/react.png"},
		{text:"Node",src:"/assets/node.png"},
		{text:"CSS",src:"/assets/css.png"},
		{text:"Javascript",src:"/assets/javascript.png"},
		{text:"MongoDB",src:"/assets/mongo.png"},
		{text:"Html",src:"/assets/html.png"},
		{text:"Express",src:"/assets/express.png"}
	]

	const [activePopup,setActivePopup] = React.useState(true);

	return(
	<div className="project_container" id="Projects">
		<h1 className="project_title">Projects</h1>
		<ResultsDisplay navItems={items}>
			<List className="project_list" listItems={Projects} Item={Project}/>
		</ResultsDisplay>
	</div>
	);
}

export const ResultsDisplay = (props)=>{
	const {navItems,children} = props

	return(
		<ResultDisplayStyle className="results">
			<Navbar 
		 		items={navItems}
		 		active={true}
		 		listClass="results_nav"
			 />
			<div className="results_children">
			{children}
			</div>
		</ResultDisplayStyle>
	);
}

export const Project = (props)=>{
	const [activePopup,setActivePopup] = React.useState(false);
	const {name,images,description} = props;

	const projectPages = [
		{children:"Description",to:"#"},
		{children:"Characteristics",to:"#"},
		{children:"Technologies/Dependencies",to:"#"},
		{children:"Links",to:"#"},
	]

	return(
	<React.Fragment>
		<CardElement 
			title={name} 
			image={images[0]} 
			appear
			width="200px"
			height="200px"
			onClick={()=>setActivePopup(true)}
			css={css`
				margin:0.5em; 
				p{font-size:130%;}
				.card_body{flex-direction:column;}
			`}
		>
			<p>{description}</p>
			<span>
				<a>View Project</a>
				<a>View Code</a>
			</span>
		</CardElement>
		<PopUp active={activePopup} setActive={()=>setActivePopup(false)}>
			<ResultsDisplay navItems={projectPages}>
				<h1>Project description</h1>
			</ResultsDisplay>
		</PopUp>
	</React.Fragment>
	);
}

const PopUp = (props)=>{
	const {active,setActive} = props;

	return(
	<React.Fragment>
	{
		active &&
		<React.Fragment>
			<div className="popup_blur">
			</div>
			<div className="popup">
				<button className="popup_close" onClick={()=>setActive(false)}>x</button>
				{props.children}
			</div>
		</React.Fragment>
	}
	</React.Fragment>
	);
}

const CardElement = (props)=>{
	const {title,image,className,children,...rest} = props;
	return(
		<CardStyle
			className={`card_element ${className}`} 
			{...rest}
		>
			<h2 className="card_title">{title}</h2>
			<img className="card_image" src={image}/>
			<div className="card_body">
				{children}
			</div>
		</CardStyle>
	);
}

const Circle = (props)=>{
	const {i,...rest} = props;
	return(
		<button {...rest}>
			<i {...i}></i>
		</button>
	);
}

const Carousel = (props)=>{
	const {images,width,height,className,...rest} = props;
	const [currentImage,setCurrentImage] = React.useState(0);
	const prevImage = 0;

	const setImage = (amount)=>{
		setCurrentImage(prev=>{
			if (amount<0)
				return amount = images.length-1;
			return amount%images.length;
		});
	}

	return(
		<CarouselStyled 
			className={`carousel ${className}`} 
			currentImage = {currentImage}
			{...rest} 
		>
			<List
				className="carousel_list" 
				listItems={images} 
				Item={"img"}
			/>
			<div className="carousel_foot">
				<button 
					className="left btn"
					onClick={()=>setImage(currentImage-1)}
				>
					<i className="fa fa-angle-double-left"></i>
				</button>
				<button 
					className="right btn"
					onClick={()=>setImage(currentImage+1)}
				>
					<i className="fa fa-angle-double-right"></i>
				</button>
				<div className="carousel_foot_foot">
					<p>{images[currentImage].text}</p>
					<List 
						className="carousel_elements"
						listItems={images.map((i,id)=>{
							return {
								id:"circle-"+id,
								i:{className:"fa fa-circle"},
								onClick:()=>setImage(id),
								className:"btn"
							}
						})} 
						Item={Circle}
					/>
				</div>
			</div>
		</CarouselStyled>
	)
}
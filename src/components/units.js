import React from "react";
import {Link} from "react-router-dom";
import {Navbar,List} from "./list";
import {
	CarouselStyled,
	CardStyle,
	ResultDisplayStyle,
	AnimatedElement,
	rotateOutAnimation,
	PopupStyles,
	Button,
	Container,
	Input
} from "./styledComponents";

export const ResultsDisplay = (props)=>{
	const {navItems,children,...rest} = props

	return(
		<ResultDisplayStyle {...rest} className="results">
			{props.animated?
				<AnimatedElement 
					animation={[rotateOutAnimation]}
					delay="1s" 
				>
					<Navbar 
				 		items={navItems}
				 		active={true}
				 		listClass="results_nav"
					 />
				</AnimatedElement>
			:
				<Navbar 
			 		items={navItems}
			 		active={true}
			 		listClass="results_nav"
				 />
			}
			<div className="results_children">
			{children}
			</div>
		</ResultDisplayStyle>
	);
}


export const CardElement = (props)=>{
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

export const PopUp = (props)=>{
	const {setOff,...rest} = props;

	return(
		<PopupStyles {...rest}>
			<div className="popup_blur">
			</div>
			<div className="popup_wrapper">
				<div className="popup">
					{props.children}
				</div>
				<button className="popup_close" onClick={setOff}>x</button>
			</div>
		</PopupStyles>
	);
}


export const IconElement = (props)=>{
	const {i,link,children,...rest} = props;
	return(
	<React.Fragment>
	{
		link?
		<Link to={rest.to?rest.to:""} {...rest}>
			<i {...i}></i>
			{children}
		</Link>
		:
		<Button {...rest}>
			<i{...i}></i>
			{children}
		</Button>
	}
	</React.Fragment>
	);
}

export const Carousel = (props)=>{
	const {images,className,...rest} = props;
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
			className={`carousel ${className || ""}`} 
			currentImage = {currentImage}
			{...rest} 
		>
			<List
				className="carousel_list" 
				listItems={images} 
				Item={"img"}
				css={`justify-content:flex-start;`}
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
								css:`background:transparent;`,
								id:"circle-"+id,
								i:{className:"fa fa-circle"},
								onClick:()=>setImage(id)
							}
						})} 
						Item={IconElement}
					/>
				</div>
			</div>
		</CarouselStyled>
	)
}

export const InputElement = (props)=>{
	const {input,...rest} = props;

	return(
		<Container align="space-around" {...rest}>
			<Input type="text" {...input}/>
		</Container>
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
import React from "react";
import {Link} from "react-router-dom";
import {Navbar,List,ListLink} from "./list";
import {
	CarouselStyled,
	CardStyle,
	ResultDisplayStyle,
	AnimatedElement,
	rotateOutAnimation,
	PopupStyles,
	Button,
	Container,
	Input,
	BorderedStyled,
	hoverStyles,
	media
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
		<ListLink {...rest}>
			<i {...i}></i>
			{children}
		</ListLink>
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

const SeeMoreLess = props=>{
	const {seeMore,seeLess,onClick} = props;
	return (
	<Container 
		css={`
		${media("small",`
			flex-direction:column-reverse;
		`)}
		padding:0;
		`} 
		align="space-around"
	>
	{
		seeMore && 
		<BorderedStyled 
			width="1px" 
			padding="5px" 
			delay="0.5s"
			css={`
				background:transparent;
				margin-top:0.5em;
			`}
		>
			<Button 
				onClick={()=>onClick(1)}
				css={`background:transparent;`}
			>
				...See more
			</Button>
		</BorderedStyled>
	}
	{
		seeLess &&
		<BorderedStyled 
			width="1px" 
			padding="5px" 
			delay="0.5s"
			css={`
				margin-top:0.5em;
			`}
		>
			<Button 
				onClick={()=>onClick(-1)}
				css={`background:transparent;`}
			>
				See less...
			</Button>
		</BorderedStyled>
	}
	</Container>
	);
}

export const ReadMore = (props)=>{
	const {children,...rest} = props;
	const childRender = React.Children.toArray(children);
	const [currentVisible,setCurrentVisible] = React.useState(1);

	const setVisibleChild = (val)=>{
		setCurrentVisible(currentVisible+val);
	}

	return(
	<React.Fragment>
	{
		childRender.map((child,i)=>{

			return(
			<Container flex="column" key={i}>
				<React.Fragment>
				{currentVisible>i && child}
				</React.Fragment>
				<React.Fragment>
				{
					currentVisible==i+1 && 
					<SeeMoreLess 
						onClick = {setVisibleChild.bind(this)}
						seeMore={i+1<childRender.length}
						seeLess={currentVisible>1}
					/>
				}
				</React.Fragment>
			</Container>
			);
		})
	}
	</React.Fragment>
	);
}